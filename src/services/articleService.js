import axios from 'axios'

const webLink = process.env["REACT_APP_WEB_LINK"];
const baseUrl = process.env["REACT_APP_LOCAL_API"] + "/api/articulos";

const getArticles = () =>{
    const opts = {
        method: "GET",
        headers: {
            //"Authorization": process.env["REACT_APP_API_TOKEN"],
            "Content-Type": "Application/JSON",
            "web_link": webLink,
        }
    }

    return fetch(baseUrl,opts)
        .then(e => e.json())
}

export default {getArticles};