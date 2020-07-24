/**
 * Created by junxie on 18/5/27.
 */
import React, { useEffect } from 'react';
import ArticleList from './ArticleList';
import ArticleContent from './ArticleContent';
import WhoAmI from './WhoAmI';
import axios from './axios';
import { Button } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const getCookie = (name) => {
    var arr,reg=new RegExp('(^| )'+name+'=([^;]*)(;|$)');
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};

const fetchArticle = async () => {

    const res = await axios('GET', 'queryArticleList.json');


    console.log(res);
};

const addArticle = async () => {

    const res = await axios('POST', 'addArticle.json', {
        data: JSON.stringify({name: '第一篇文字', size: 100})
    });
    console.log(res);
};

const autoCi = async () => {

    const res = await axios('POST', 'updateBrowserRepo.json', {
        repoLocation: '/root/www',
        //repoLocation: '/Users/junxie/Documents/test',
        repoName: 'bbb324.github.io',
    });
    console.log(res);
};


const App = () => {
    useEffect(() => {
        console.log(10);
        //fetchArticle();
    }, []);

    return <div>
        <Button onClick={() => autoCi()}>上传11</Button>

        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/whoami">whoami_1</Link>
                    </li>
                    <li>
                        <Link to="/list">ArticleList</Link>
                    </li>
                    <li>
                        <Link to="/content/1">ArticleContent</Link>
                    </li>

                </ul>

                <hr />
                <Route path="/whoami" component={WhoAmI} />
                <Route path="/list" component={ArticleList} />
                <Route path="/content/:id" component={ArticleContent} />
            </div>
        </Router>;
    </div>;
};

export default App;

