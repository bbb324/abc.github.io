/**
 * Created by junxie on 18/5/27.
 */
import React, { useEffect, useState } from 'react';
import axios from '../common/axios';
import ArticleContent from './ArticleContent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        return <Link to={urlDecorator(item)} >{item}</Link>;
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
    
    return <Router>
        <div>
            <ul>
                {renderTitle(blogList)} 
            </ul>

            <hr />
            {renderContent(blogList)}
            
        </div>
    </Router>;
};

export default App;

