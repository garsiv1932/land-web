import {useEffect, useState} from "react";
import articleService from "../services/articleService";

export function useArticles (){
    const [articles,setArticles]= useState([])
    
    useEffect(()=> {
        articleService.getArticles()
            .then(initialArticles =>{
                setArticles(initialArticles)
            })
    } , [])
    return{
        articles,
        setArticles
    }    
} 

