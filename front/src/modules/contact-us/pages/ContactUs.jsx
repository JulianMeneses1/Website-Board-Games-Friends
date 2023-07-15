import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

const ContactUs = () => {

    { defineElement(lottie.loadAnimation)}
    
    return (
        <>
              <div className="container">
                <h2 className="text-center">Share your ideas, comments and thoughts with us!</h2>

                <div className='d-flex justify-content-center'>
                    <form className="w-50">
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
                                        id="nombre" 
                                        name="nombre"                     
                                        className="form-control my-1" 
                                        placeholder="Nombre" 
                                        maxlength="30"                                
                                     />                            
                                </div>
                                <p 
                                    className="text-danger" 
                                    Este campo es obligatorio
                                ></p>                                             
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
                                        id="asunto" 
                                        name="asunto" 
                                        className="form-control my-1" 
                                        placeholder="Asunto" 
                                        maxlength="40"   />
                                </div>
                                <p 
                                    className="text-danger">
                                    Este campo es obligatorio
                                </p>                                             
                        </div> 
                        <div className="row my-2">
                            
                                <div className="col d-flex align-items-center"> 
                                    <span>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/tkgyrmwc.json"
                                            trigger="loop"
                                            delay="1000"
                                            colors="primary:#121331,secondary:#08a88a"
                                            style={{width:"50px",height:"50px"}}>
                                        </lord-icon>
                                    </span>                           
                                    <input
                                        type="email" 
                                        id="correo" 
                                        name="correo" 
                                        className="form-control my-1" 
                                        placeholder="Correo" 
                                        maxlength="30"                                
                                        />
                                </div>
                                <p 
                                    className="text-danger" >
                                    Este campo es obligatorio
                                </p>
                                <p                             
                                    className="text-danger" >
                                    El correo debe cumplir con el siguiente formato de ejemplo: mauricio@gmail.com
                                </p>                     
                        </div> 
                        <div className="row mt-2">
                       
                                <div className="col">                       
                                    <textarea
                                        placeholder="Mensaje" 
                                        className="form-control my-1"  
                                        maxlength="200"></textarea> 
                                </div>
                                <p 
                                    className="text-danger" >
                                    Este campo es obligatorio
                                </p>                   
                        </div>
                        <div className="row mt-4">
                            <div className="col">                       
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>                        
                        </div>                                         
                    </form>
                </div>


            </div>
        </>
    )
}


export default ContactUs