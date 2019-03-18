import React, {Component} from 'react';
import ReactMd from 'react-md-file';
import data from '../articles/map';
class ArticleContent extends Component {


    constructor(props, context) {

        super(props, context);
        this.state = {
            src: ''
        };

    }

    componentDidMount() {
        let seq = this.props.match.params.id;
        this.setState({
            src: data[seq].src
        });
    }

    render() {
        if(this.state.src !== '') {
            return <ReactMd fileName={this.state.src} />;
        }
        return null;

    }
}

export default ArticleContent;
