import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { useForm } from "react-hook-form";
import { sendEmail } from '../services/emailService';
import Swal from "sweetalert2";
import { useState } from 'react';


const ContactUs = () => {

    const emailPattern = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

    { defineElement(lottie.loadAnimation)};    

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const watchAllFields = watch(); 
    
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) =>{
        setIsLoading(true);
        const dataEmail = {
            affair: data.affair,
            message: `Nombre: ${data.name}
            \nMensaje: ${data.message}
            \nCorreo: ${data.email}`
        }        
        sendEmail(dataEmail)
            .then(()=>{
                Swal.fire(
                    'Email sent',
                    'Thanks! We will reply to you as soon as possible',
                    'success'
                );
                setIsLoading(false);  
                reset();
            })
            .catch(()=> {
                Swal.fire(
                    'Error',
                    'Sorry, the email could not be sent, please try again',
                    'error'
                );
                setIsLoading(false);  
            })
    };

    return (
        <>
            <div className="container">
                <h2 className="text-center">Share your ideas, comments and thoughts with us!</h2>
                <div className='d-flex justify-content-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                        <div className="row my-2">
                            <div className="col d-flex align-items-center">
                                <span>                               
                                    <lord-icon
                                            src="https://cdn.lordicon.com/dxjqoygy.json"
                                            trigger="loop"
                                            delay="750"
                                            colors="primary:#121331,secondary:#08a88a"
                                            style={{width:"50px",height:"50px"}}>
                                    </lord-icon>
                                </span>                             
                                <input
                                    type="text" 
                                    id="name" 
                                    name="name"                    
                                    {...register("name", { required: true })}
                                    className={`form-control my-1 ${errors.name && 'is-invalid'}`}
                                    placeholder="Name" 
                                    maxLength="15"                                
                                    />                            
                            </div>
                            {errors.name?.type === 'required' && <p className="text-danger mb-0">This field is required</p>}                                            
                        </div>
                        <div className="row my-2">
                            <div className="col d-flex align-items-center">
                                <span>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/nocovwne.json"
                                        trigger="loop"
                                        delay="1000"
                                        colors="primary:#121331,secondary:#08a88a"
                                        style={{width:"50px",height:"50px"}}>
                                    </lord-icon>
                                </span>                          
                                <input
                                    type="texto" 
                                    id="affair" 
                                    name="affair" 
                                    className={`form-control my-1 ${errors.affair && 'is-invalid'}`}                                    
                                    {...register("affair", { required: true })}
                                    placeholder="Affair" 
                                    maxLength="50"/>
                            </div>
                            {errors.affair?.type === 'required' && <p className="text-danger mb-0">This field is required</p>}                                            
                        </div> 
                        <div className="row my-2">
                            <div className="col d-flex align-items-center"> 
                                <span>
                                    <lord-icon
                                        src="https://cdn.lordicon.com/tkgyrmwc.json"
                                        trigger="loop"
                                        delay="1000"
                                        colors="primary:#121331,secondary:#08a88a"
                                        style={{width:"50px", height:"50px"}}>
                                    </lord-icon>
                                </span>                           
                                <input
                                    type="text" 
                                    id="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    maxLength="40"
                                    className={`form-control ${watchAllFields?.email?.match(emailPattern) && 'is-valid'} ${errors.email && 'is-invalid'}`}
                                    {...register("email", { required: true, pattern: emailPattern })}                                
                                    />
                            </div>
                            {errors.email?.type === 'required' && <p className="text-danger mb-0">This field is required</p>}                                            
                            {errors.email?.type === 'pattern' && <p className="text-danger mb-0">The email entered is invalid</p>}                         
                        </div> 
                        <div className="row mt-2">
                            <div className="col">                       
                                <textarea
                                    placeholder="Message" 
                                    maxLength="300"
                                    className={`form-control my-1 ms-2 ${errors.message && 'is-invalid'}`}
                                    style={{height:"100px"}}
                                    {...register("message", { required: true })}></textarea> 
                            </div>
                            {errors.message?.type === 'required' && <p className="text-danger mb-0">This field is required</p>}                                            
                        </div>
                        <div className="row mt-4">
                            <div className="col text-center">                
                                { isLoading 
                                    ? <button type="button" className="w-50 btn btn-primary btn-lg ">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <p className="mb-0">Processing</p>
                                                <div className="spinner-border text-info me-1" role="status"></div>
                                            </div>
                                        </button>
                                    : <button type="submit" className="w-50 btn btn-lg btn-primary">Enviar</button>
                                }     
                            </div>                        
                        </div>                                         
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs