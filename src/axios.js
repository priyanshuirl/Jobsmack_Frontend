import axios from "axios"

const instance = axios.create({
    baseURL: "https://jobsmack.herokuapp.com/"
})

export default instance;