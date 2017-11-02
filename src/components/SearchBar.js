import React, {Component} from 'react';
import Input from 'material-ui/Input';

const styles = theme => ({

});

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <div>
                <i className="material-icons">search</i>
                <Input
                    defaultValue={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        )
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

export default SearchBar;

// export default SearchBar;
