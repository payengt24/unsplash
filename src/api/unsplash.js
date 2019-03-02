import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ef68a9049d726d2315ace6284514bda3b32003c12e5755356af403205135c331'
      }  
})