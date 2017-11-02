import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    margin: "10px 0"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: "1rem",
    maxHeight: "2.8rem",
    overflow: "hidden"
  },
  content: {
    flex: '1 0 auto',
  },
  description: {
    maxHeight: "3.2rem",
    maxWidth: "10rem",
    overflow: "hidden"
  },
  cover: {
    width: "9rem",
    height: "9rem",
  },
});

const VideoListItem = ({video, onVideoSelect, classes}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <Card onClick={() => onVideoSelect(video)} className={classes.card}>
      <div>
        <CardMedia
          className={classes.cover}
          image={imageUrl}
          title="Live from space album cover"
        />
      </div>
      <div className={classes.details}>
        <CardContent align="left" className={classes.content}>
          <Typography className={classes.title} type="headline" component="h2">{video.snippet.title}</Typography>
          <Typography className={classes.description} type="subheading" color="secondary">
            {video.snippet.description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  )
}

VideoListItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoListItem);
