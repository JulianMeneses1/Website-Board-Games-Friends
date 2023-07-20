import { Route, Routes } from "react-router-dom"
import { Navbar } from "../shared/Navbar"
import { Footer } from "../shared/Footer"
import { Suspense, lazy } from "react"
const Home = lazy(()=>import('../modules/home/pages/Home'))
const KickstarterCampaign = lazy(()=>import('../modules/kickstarter-campaign/pages/KickstarterCampaign'))
const AboutUs = lazy(()=>import('../modules/about-us/pages/AboutUs'))
const BackProject = lazy(()=>import('../modules/back-project/pages/BackProject'))
const UxUiPrototype = lazy(()=>import('../modules/ux-ui-prototype/pages/UxUiPrototype'))
const FAQ = lazy(()=>import('../modules/faq/pages/FAQ'))
const ContactUs = lazy(()=>import('../modules/contact-us/pages/ContactUs'))
const StretchGoals = lazy(()=>import('../modules/stretch-goals/pages/StretchGoals'))
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

export const AppRoutes = () => {
    { defineElement(lottie.loadAnimation)}
    return (
        <>
            <Navbar/>
            <Suspense fallback={
                <div className="d-flex justify-content-center align-items-center" style={{height:"60vh"}} >
                    <lord-icon
                        src="https://cdn.lordicon.com/pxruxqrv.json"
                        trigger="loop"
                        colors="primary:#F77F00,secondary:#FFB042"
                        style={{width:"150px",height:"150px"}}>
                    </lord-icon>
                </div>
                }>
                <Routes>                
                    <Route path='/' element={ <Home/> } />
                    <Route path='/about-us' element={ <AboutUs/> } />
                    <Route path='/join-the-kickstarter-campaign' element={<KickstarterCampaign /> } />
                    <Route path='/ways-to-back-this-project' element={ <BackProject/> } />
                    <Route path='/ux-ui-prototype' element={ <UxUiPrototype/> } />
                    <Route path='/stretch-goals' element={ <StretchGoals/> } />
                    <Route path='/faq' element={ <FAQ/> } />
                    <Route path='/contact-us' element={ <ContactUs/> } />   
                         
                </Routes>
         
            </Suspense>
            <Footer/>        
        </>    
    )
}


