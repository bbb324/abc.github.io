/**
 * Created by junxie on 18/5/27.
 */
import React, { useEffect, useState } from 'react';
import axios from '../common/axios';
import ArticleContent from './ArticleContent';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Header from './Header';
const fetchArticleList = async (setBlogList) => {
    const res = await axios.get('blogList.json');
    setBlogList(res.data);
};

const urlDecorator = (item) => {
    let name = item.split('.')[0];
    return `/blog.htm/${name}`;
};

const renderTitle = (list) => {
    return list.map(item => {
        return <div className={'title-area'}>
            <Link to={urlDecorator(item)} className={'title'}>{item}</Link>
        </div>;
    });
};

const renderContent = (list) => {
    return list.map(item => {
        return <Route path={urlDecorator(item)} 
            component={() => ArticleContent({title: item})} />;
    });
};

const App = () => {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        fetchArticleList(setBlogList);
    }, []);
    if(blogList.length === 0) return null;
    console.log(22);
    
    return <div>
        <Header />
        <Router>
            <div className={'article-body'}>
                <ul className={'article-index'}>
                    <li key='index' className={'article-category'}>目录</li>
                    {renderTitle(blogList)} 
                </ul>

                <div className={'article-content'}>
                    {renderContent(blogList)}
                    <Route path="/" render={() => (
                        <Redirect to={urlDecorator(blogList[0])}/>
                    )}/>
                </div>
                
            </div>
        </Router>
    </div>;
};

export default App;

