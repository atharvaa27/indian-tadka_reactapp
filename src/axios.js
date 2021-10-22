import axios from "axios";

const instance = axios.create({
     // THE API (cloud function) URL
    baseURL: 'https://us-central1-indian-tadka-resto.cloudfunctions.net/api'
    //'http://localhost:5001/indian-tadka-resto/us-central1/api'
})

export default instance;


