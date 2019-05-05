import axios from 'axios'

const KEY = 'AIzaSyCQ7AleKH1hmTm6X7v6Br0zYAnS0cY46uY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})