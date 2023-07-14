import { NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="fixed-top">
                <div className="d-flex justify-content-center" style={{height:"15vh",backgroundColor:"#d4a373"}}>
                    <img src="https://app-board-games-friends.s3.amazonaws.com/LogoPortada.webp"/>  
                    <img src="https://app-board-games-friends.s3.amazonaws.com/Presentaci%C3%B3n.webp"/>                    
                </div>
                <nav className="navbar navbar-expand-lg pt-0">                
                    <div className="container-fluid">

                        {/* NAVBAR EXPANDIDO */}
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
                                data-bs-target="#nav" aria-controls="nav" aria-label="Toggle navigation" style={{backgroundColor:"gray"}}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="w-100 d-none d-lg-flex">
                           <div className="me-3">
                             <NavLink className="nav-link" to="/" style={{height:"70px", width:"80px"}}>       
                                 <img className="w-100 h-100" src="https://app-board-games-friends.s3.amazonaws.com/Logo.webp"/>    
                             </NavLink>
                           </div>
                            <ul className="navbar-nav d-flex justify-content-between align-items-center pt-2 w-100 me-3">
                                <li><NavLink className="nav-link" to="about-us">ABOUT US</NavLink></li>
                                <li><NavLink className="nav-link" to="join-the-kickstarter-campaign">SUPPORT THE KICKSTARTER CAMPAIGN!</NavLink></li>
                                <li><NavLink className="nav-link" to="ways-to-back-this-project">WAYS TO BACK THIS PROJECT</NavLink></li>
                                <li><NavLink className="nav-link" to="ux-ui-prototype">UX UI PROTOTYPE</NavLink></li>
                                <li><NavLink className="nav-link" to="stretch-goals">STRETCH GOALS</NavLink></li>
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
                                    <li><NavLink onClick={() =>navigate('join-the-kickstarter-campaign')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">SUPPORT THE KICKSTARTER CAMPAIGN!</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('ways-to-back-this-project')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas" >WAYS TO BACK THIS PROJECT</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('ux-ui-prototype')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">UX UI PROTOTYPE</NavLink></li>
                                    <li><NavLink onClick={() =>navigate('stretch-goals')} className="nav-link fs-5 my-2" data-bs-dismiss="offcanvas">STRETCH GOALS</NavLink></li>
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