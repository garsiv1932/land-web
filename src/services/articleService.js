import {Web} from "@material-ui/icons";
import storageService from './storageService'

const webLink = process.env["REACT_APP_WEB_LINK"];
const url = process.env["REACT_APP_API_URL"] + "/api/articulos";
const key = "Bearer " +   process.env["REACT_APP_API_TOKEN"];

const getArticles = async () =>{
    let webArticles = localStorage.getItem("articles");
    if(webArticles !== null && webArticles !== undefined){
        let articles = JSON.parse(webArticles);
        let articlesQuantityInServer = await getArticlesQuantity();
        
        if(articlesQuantityInServer !== articles.length){
            return await getArticlesFromApi();                        
        }
        return articles;

    }else{
        let articles = await getArticlesFromApi();
        localStorage.setItem("articles",JSON.stringify(articles));
        return articles;
    }
}

const getArticlesFromApi = async () =>{
    const opts = {
        method: "GET",
        headers: {
            "Authorization": key,
            "Content-Type": "application/json",
            "web_link": webLink
        }
    }

    return fetch(url,opts)
        .then(e => e.json());
}

const getArticlesQuantity = async () =>{
    const opts = {
        method: "GET",
        headers: {
            "Authorization": key,
            "Content-Type": "application/json",
            "web_link": webLink
        }
    }
    
    return fetch(url, opts)
        .then(e => e.json())
}

export default {getArticles, getArticlesFromApi};