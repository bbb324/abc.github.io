import React, {Component} from 'react';
import ReactMd from 'react-md-file';
class ArticleContent extends Component {


    constructor(props, context) {

        super(props, context);
        this.state = {};

    }

    componentDidMount() {

    }

    render() {
        return <ReactMd fileName={'blog.github.io/src/article-1.md'} />;
    }
}

export default ArticleContent;
