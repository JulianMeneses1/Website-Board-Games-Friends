import { NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="fixed-top">
                <div style={{height:"12vh"}}>
                    <img className="w-100 h-100" style={{objectFit:"cover"}} src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"/>
                </div>
                <nav className="navbar navbar-expand-lg">                
                    <div className="container-fluid">

                        {/* NAVBAR EXPANDIDO */}
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                                data-bs-target="#nav" aria-controls="nav" aria-label="Toggle navigation" style={{backgroundColor:"gray"}}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="w-100 d-none d-lg-flex">
                           <div className="me-3">
                             <NavLink className="nav-link" to="/" style={{height:"67px"}}>       
                                 <img className="w-100 h-100" style={{objectFit:"cover"}} src="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"/>    
                             </NavLink>
                           </div>
                            <ul className="navbar-nav d-flex justify-content-between align-items-center w-100 me-3">
                                <li><NavLink className="nav-link" to="about-us">ABOUT US</NavLink></li>
                                <li><NavLink className="nav-link" to="join-the-kickstarter-campaign">JOIN THE KICKSTARTER CAMPAIGN!</NavLink></li>
                                <li><NavLink className="nav-link" to="ways-to-back-this-project">WAYS TO BACK THIS PROJECT</NavLink></li>
                                <li><NavLink className="nav-link" to="ux-ui-prototype">UX UI PROTOTYPE</NavLink></li>
                                <li><NavLink className="nav-link" to="faq">FAQ</NavLink></li>
                                <li><NavLink className="nav-link" to="contact-us">CONTACT US</NavLink></li>                                 
                            </ul>                     
                        </div>        

                        {/* NAVBAR COLAPSADO */}
                
                        <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="nav" aria-labelledby="navLabel">
                            <div className="offcanvas-header pb-0">
                                <h3 className="navbar-brand" id="navLabel">
                                    <NavLink onClick={() =>navigate('/')} className="nav-link" data-bs-dismiss="offcanvas">
                                        Board Games Friends
                                    </NavLink>
                                </h3>   
                                <button type="button" className="btn-close" style={{fontSize: "20px"}} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li><NavLink onClick={() =>navigate('about-us')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">ABOUT US</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('join-the-kickstarter-campaign')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">JOIN THE KICKSTARTER CAMPAIGN!</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('ways-to-back-this-project')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas" >WAYS TO BACK THIS PROJECT</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('ux-ui-prototype')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">UX UI PROTOTYPE</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('faq')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">FAQ</NavLink></li> 
                                    <li><NavLink onClick={() =>navigate('contact-us')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">CONTACT US</NavLink></li> 
                                </ul>
                            </div>
                        </div>          
                    </div>
                </nav>
            </div>    
        </>
       
    )
}