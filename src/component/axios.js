import axios from 'axios';
export default async (method = 'GET', url, data) => {
    let csrf = '';
    try {
        csrf = window.document.querySelector('meta[name="_csrf_token"]').getAttribute('content');
    } catch(e) {
        csrf = '';
    }
    const mixedUrl = `${url}?_csrf=${csrf}`;
    //debugger;
    switch (method) {
    case 'GET':
        return await axios.get(url);
    case 'POST':
        return await axios.post(mixedUrl, data);
    default:
        return await axios.get(url);
    }
    
};