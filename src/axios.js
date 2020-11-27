import axios from "axios";
 

const instance = axios.create({
    baseURL:"http://localhost:5001/eshop-85231/us-central1/api" // The API {cloud function} url
    
});

export default instance;
