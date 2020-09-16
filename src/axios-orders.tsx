import Axios from 'axios'

const instance = Axios.create({
    baseURL: process.env.REACT_APP_DATABASE_URL
})

export default instance