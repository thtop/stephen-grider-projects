import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f0baa111de87016a721a252285e4a8d27b891b76a3875d61d35a448a094c4b66'
    }
})