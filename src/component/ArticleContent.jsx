import React, { useEffect, useState } from 'react';
import ReactMd from 'react-md-file';
import axios from '../common/axios';
import ReactMarkdown from 'react-markdown';

const fetchArticle = async (fileName, setContent) => {
    const res = await axios.get(`/blogContent.json?fileName=${fileName}`);
    
    setContent(res.data);
};

const ArticleContent = (props) => {
    const [content, setContent] = useState('');
    
    
    useEffect(() => {
        fetchArticle(props.title, setContent);
    }, []);
    
    return <div>
        <ReactMarkdown source={content}/>
    </div>;
};

export default ArticleContent;
