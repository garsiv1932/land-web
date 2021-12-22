import './Contact.css'
import React, {useEffect, useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup'
import emailjs from 'emailjs-com';
import  ReCaptcha  from  'google-recaptcha-react-component';

function Contact(){
    
    function recaptchaLoaded(){
        setCatpcha(true);
        console.log("cargo la concha de la lora");
    }
    
    const [captcha, setCatpcha] = useState(false);
    const [result, setResult] = useState("");
    
    
    const initialValues={
        nombre: "",
        email:"",
        message: "",
        asunto: ""
    };

    const validationSchema= Yup.object({
        email: Yup.string()
            .email('Mail invalido')
            .required('Reuqerido'),
        nombre: Yup.string()
            .max(200,'El nombre con 200 caracteres maximo')
            .required('Requerido'),
        message: Yup.string()
            .required('El mensaje no puede estar vacio')
    });

    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema  
    });
    
    function onSubmit(values){
        debugger;
        // values.preventDefault();

        emailjs.send('LlorachDevs', 'template_j6yxg58', values, 'user_q0voPPOe8Y8ioYfA6BlPV')
            .then((result) => {
                setResult(result.text)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setResult(error.text)

            });
        }

    return(
        <div className="container-fluid mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-sm-6 col-lg-6 col-12 text-center centerdiv">
                    <h1>Contacto</h1>
                    <p>Americo Vespucio 1445, Montevideo, 11700</p>
                    <p>llorach.pablo@llorachdevs.com</p>
                    <p>+59891211845</p>
                </div>
    
                <div className="col-sm-6 col-lg-6 col-12 ">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row justify-content-center">
                            <div className="col-sm-3 col-lg-3 col-12 mt-sm-0 mt-lg-0 mt-2">
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Nombre" 
                                    className={formik.touched.nombre && formik.errors.nombre
                                        ? "form-control is-invalid"
                                        : "form-control"
                                    }
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nombre}
                                />
                            </div>
                                
                            <div className="col-sm-3 col-lg-3 col-12 mt-sm-0 mt-lg-0 mt-2">
                                <input type="text" name="telefono" placeholder="Telefono" className="form-control"/>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-2">
                            <div className="col-sm-6 col-lg-6 col-12">
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email" 
                                    className={formik.touched.email && formik.errors.email
                                ? "form-control is-invalid" : "form-control"}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                            </div>
                        </div>

                        <div className="row justify-content-center mt-2">
                            <div className="col-sm-6 col-lg-6 col-12">
                                <input 
                                    type="text" 
                                    name="asunto" 
                                    placeholder="Asunto" 
                                    className="form-control"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.asunto}
                                />
                            </div>
                        </div>

    
                        <div className="row justify-content-center mt-2">
                            <div className="col-sm-6 col-lg-6 col-12">
                                <textarea
                                    className= { formik.touched.message && formik.errors.message
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="message"
                                    rows="4"
                                    placeholder="Escriba su mensaje aqui..."
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                />
                                <div 
                                    className={(formik.touched.message && formik.errors.message) || (formik.touched.email && formik.errors.email) || (formik.touched.nombre && formik.errors.nombre)
                                    ?
                                    "error-messages alert-danger"
                                    :
                                    "error-messages"
                                    }
                                >
                                    
                                { (formik.touched.message && formik.errors.message) 
                                    ?
                                    <div className="bordiado ">{formik.errors.message}</div>
                                    :
                                    <div className="bordiado"></div>
                                }
                                
                                { (formik.touched.email && formik.errors.email)
                                    ? 
                                    <div className="bordiado">{formik.errors.email}</div>
                                    : 
                                    <div className="bordiado"></div>
                                }
                                
                                { (formik.touched.nombre && formik.errors.nombre)
                                ?
                                <div className="bordiado">{formik.errors.nombre}</div>
                                : 
                                <div className="bordiado"></div>
                                }
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-6 col-12">
                                <button 
                                    type="submit" 
                                    className="btn btn-dark btn-block"
                                    disabled=
                                    {
                                        !formik.errors.message && !formik.errors.email && !formik.errors.nombre && captcha 
                                            ? null 
                                            : 
                                            "disabled"
                                    }
                                >Enviar</button>
                            </div>
                        </div>
                        { result !== ""
                            ?
                            <div className="row justify-content-center">
                                <div className="col-sm-6 col-lg-6 col-12">
                                    <p className="text-danger alert-danger bordiado mt-1">{result}</p>
                                </div>
                            </div>
                            :null
                        }
                    </form>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-6 col-12">
                            <ReCaptcha
                                token='6LekzpoaAAAAAFASmo5YGz9FvYEqBf0-AH_ZmjTz'
                                onSuccess={recaptchaLoaded}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;