import {Web} from "@material-ui/icons";
import storageService from './storageService'

const webLink = process.env["REACT_APP_WEB_LINK"];
const urlArticlesByLink = process.env["REACT_APP_API_URL"] + "/api/articulos/getArticlesByLink";
const urlArticlesQuantity = process.env["REACT_APP_API_URL"] + "/api/articulos/cantidad";
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
            'Accept': 'application/json',
            "link": webLink
        }
    }

    return fetch(urlArticlesByLink,opts)
        .then(e => e.json());
}

const getArticlesQuantity = async () =>{
    const opts = {
        method: "GET",
        headers: {
            "Authorization": key,
            "Content-Type": "application/json",
            'Accept': 'application/json',
            "link": webLink
        }
    }
    
    return fetch(urlArticlesQuantity, opts)
        .then(e => e.json())
}

export default {getArticles, getArticlesFromApi};