import axios from 'axios';

const KEY = 'AIzaSyAPPQCzqJPnYfy0U7MM56IAi1HLhejzlLI';
// it is a constant value and should not be changed 

const Youtube = axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3' ,
    params : {
        part : 'snippet' ,
        maxResults : 5 ,
        key : KEY , 
    }

});

export default Youtube;