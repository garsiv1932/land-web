import './Dashboard.css'
import {withRouter} from "react-router-dom";
import {useFormik} from "formik";
import {useState} from "react";
import * as Yup from 'yup'
import validationService from '../../services/validationService'
import {useUser} from "../../hooks/useUser";

function Dashboard({history}){
    
    const {user, useLogged} = useUser();
    
    if(user === null){
        
    }
    
    useLogged({history});
    
    const onSubmit = () => {
        
    }
    
    const initialValues = {
        tittle: "",
        link: "",
        date:"1/1/1980",
        image: ""
    }
    
    const validationSchema = validationService.validSchema();
    
    const formik = useFormik({
        onSubmit,
        initialValues,
        validationSchema
    });
    
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center">
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="tittle">
                            Ingrese Titulo
                        </label>
                        <input 
                            type="tittle"
                            name="tittle"
                            id="tittle"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.tittle}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleLink">
                            Link del articulo
                        </label>
                        <input
                            type="url"
                            name="articleLink"
                            id="articleLink"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.link}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="articleLink">
                            Imagen del articulo
                        </label>
                        <input
                            type="url"
                            name="articleImage"
                            id="articleImage"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.image}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="publishDate">
                            Fecha de publicación
                        </label>
                        
                        <input
                            type="date"
                            name="publishDate"
                            id="publishDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date}
                        >
                        </input>
                    </div>
                </form>
                
            </div>
            
        </div>
    )
    
}

export default withRouter(Dashboard) 