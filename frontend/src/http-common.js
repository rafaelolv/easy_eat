import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/easyeat",
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        // "Access-Control-Allow-Origin": "*",
    } 
});