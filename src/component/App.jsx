/**
 * Created by junxie on 18/5/27.
 */
import React from 'react';
import ArticleList from './ArticleList';
import ArticleContent from './ArticleContent';
import WhoAmI from './WhoAmI';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {

    render() {
        return <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/whoami">whoami</Link>
                    </li>
                    <li>
                        <Link to="/list">ArticleList</Link>
                    </li>
                    <li>
                        <Link to="/content">ArticleContent</Link>
                    </li>

                </ul>

                <hr />
                <Route path="/whoami" component={WhoAmI} />
                <Route path="/list" component={ArticleList} />
                <Route path="/content" component={ArticleContent} />
            </div>
        </Router>;
    }
    /*render() {
        return <div>
            <ArticleContent/>
            <ArticleList/>
        </div>
    }*/
}

export default App;
