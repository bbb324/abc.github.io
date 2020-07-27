import axios from 'axios';
class Axios {
    async get(url) {
        const res = await axios.get(url);
        return res.data;
    }
    async post(url, data) {
        let csrf = '';
        try {
            csrf = window.document.querySelector('meta[name="_csrf_token"]').getAttribute('content');
        } catch(e) {
            csrf = '';
        }
        const mixedUrl = `${url}?_csrf=${csrf}`;
        const res = await axios.post(mixedUrl, data);

        return res.data;
    }
}
export default new Axios();

