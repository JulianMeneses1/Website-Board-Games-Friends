import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate();

    const [scrollY, setScrollY] = useState(window.scrollY);
    const [showMenu, setShowMenu] = useState(true);
    
    // Función que se activa cada vez que el usuario scrollea, si scrollea hacia abajo se oculta el menú
    // (clase hide-menu), si scrollea hacia arriba se muestra el menu (clase show-menu)
    useEffect(() => {  
        const handleScroll = () => {            
        if (scrollY < window.scrollY) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
        setScrollY(window.scrollY);
        };    
        window.addEventListener('scroll', handleScroll);      
    }, [scrollY]);

    return (
        <>
            <header className={` fixed-top ${showMenu ? 'show-menu' : 'hide-menu'}`}>
                <NavLink to="/">
                    <div className="d-flex justify-content-center mt-2 " style={{height:"93px"}}>
                        <img src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/LogoPortada.png`}/>                   
                    </div>
                </NavLink>
                <nav className="navbar navbar-expand-lg pt-3" style={{height:"75px"}} >                
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#nav" aria-controls="nav" aria-label="Toggle navigation" >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* NAVBAR EXPANDIDO */}                       
                        
                        <div className="w-100 d-none  d-lg-flex">
                           <div>
                             <NavLink className="nav-link mb-2" to="/" style={{height:"65px"}}>       
                                 <img className="w-100 h-100"  src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF+Logo+Botonera.png`} />    
                             </NavLink>
                           </div>
                            <ul className="navbar-nav d-flex justify-content-around align-items-center w-100 me-3">
                                <li><NavLink className="nav-link" to="about-us">About us</NavLink></li>
                                <li><NavLink className="nav-link" to="join-the-kickstarter-campaign">Support the Kickstarter Campaign!</NavLink></li>
                                <li><NavLink className="nav-link" to="ways-to-back-this-project">Ways to back this project</NavLink></li>
                                <li><NavLink className="nav-link" to="ux-ui-prototype">UX UI Prototype</NavLink></li>
                                <li><NavLink className="nav-link" to="stretch-goals">Stretch Goals</NavLink></li>
                                <li><NavLink className="nav-link" to="faq">FAQ</NavLink></li>
                                <li><NavLink className="nav-link" to="contact-us">Contact us</NavLink></li>                                 
                            </ul>                     
                        </div>        

                        {/* NAVBAR COLAPSADO */}
                
                        <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="nav" aria-labelledby="navLabel">
                            <div className="offcanvas-header pb-0 ps-0">                               
                                <NavLink onClick={() =>navigate('/')} className="nav-link" data-bs-dismiss="offcanvas">
                                    <div className="d-flex justify-content-center pb-0 " style={{height:"65px"}}>
                                        <img src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF+Logo+Botonera.png`}/>                   
                                    </div>                                
                                </NavLink>                              
                                <button type="button" className="btn-close me-3" style={{fontSize: "20px"}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body pt-2 ">
                                <ul className="navbar-nav">
                                    <li><NavLink onClick={() =>navigate('about-us')} className="nav-link my-2" data-bs-dismiss="offcanvas">About us</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('join-the-kickstarter-campaign')} className="nav-link  my-2" data-bs-dismiss="offcanvas">Support the Kickstarter Campaign!</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('ways-to-back-this-project')} className="nav-link  my-2" data-bs-dismiss="offcanvas" >Ways to back this project</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('ux-ui-prototype')} className="nav-link  my-2" data-bs-dismiss="offcanvas">UX UI Prototype</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('stretch-goals')} className="nav-link  my-2" data-bs-dismiss="offcanvas">Stretch Goals</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('faq')} className="nav-link  my-2" data-bs-dismiss="offcanvas">FAQ</NavLink></li> 
                                    <li><NavLink onClick={() =>navigate('contact-us')} className="nav-link  my-2" data-bs-dismiss="offcanvas">Contact us</NavLink></li> 
                                </ul>
                            </div>
                        </div>          
                    </div>
                </nav>
            </header>    
        </>
       
    )
}