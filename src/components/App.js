import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import config from './../config/config';

import AppBar from './AppBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { blue, green } from 'material-ui/colors';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const theme = createMuiTheme({
  palette: {
     textColor: '#42A5F5',
  },
  primary: blue,
  secondary: green,
});

const styles = theme => ({
 '@global': {
    body: {
      margin: 0,
    },
  },
  root: {
    flexGrow: 1,
    marginTop: 30,
    padding: 10,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

// put your api key
const API_KEY = config.api.youtube;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('guitar');

    const { classes } = props;
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <AppBar onSearchTermChange={videoSearch} />
          <div className={this.props.classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={8}>
                <Paper className={this.props.classes.paper}>
                  <VideoDetail video={this.state.selectedVideo} />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper className={this.props.classes.paper}>
                <VideoList
                  onVideoSelect={selectedVideo => this.setState({
                    selectedVideo
                  })}
                  videos={this.state.videos}
                />
              </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

