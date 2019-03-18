import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import data from '../articles/map';
class ArticleList extends Component {

    constructor(props, context) {

        super(props, context);
        this.state = {};
    }

    jump(sequence) {
        this.props.history.push(`/content/${sequence}`)
    }

    getTitle() {
        return data.map((item, sequence) => {
            return <li onClick={this.jump.bind(this, sequence)}>{item.title}</li>
        });
    }

    render() {
        return (<div className={'content'}>
            <h1>文章列表</h1>
            <ul className={'article-title'}>
                {this.getTitle()}
            </ul>
        </div>);
    }
}

export default ArticleList;
