import axios from 'axios';

const KEY = 'AIzaSyBNreisnpouC7Rgr2bx_RrEudnhU4J6FIc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    key: KEY,
  },
});
