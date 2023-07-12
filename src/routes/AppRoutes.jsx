import { Route, Routes } from "react-router-dom"
import { Home } from "../modules/home/pages/Home"
import { Navbar } from "../shared/Navbar"
import { Footer } from "../shared/Footer"
import { AboutUs } from "../modules/about-us/pages/AboutUs"
import { KickstarterCampaign } from "../modules/kickstarter-campaign/pages/KickstarterCampaign"
import { BackProject } from "../modules/back-project/pages/BackProject"
import { UxUiPrototype } from "../modules/ux-ui-prototype/pages/UxUiPrototype"
import { FAQ } from "../modules/faq/pages/FAQ"
import { ContactUs } from "../modules/contact-us/pages/ContactUs"

export const AppRoutes = () => {

    return (
        <>       
            <Navbar/>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/about-us' element={ <AboutUs/> } />
                <Route path='/join-the-kickstarter-campaign' element={ <KickstarterCampaign/> } />
                <Route path='/ways-to-back-this-project' element={ <BackProject/> } />
                <Route path='/ux-ui-prototype' element={ <UxUiPrototype/> } />
                <Route path='/faq' element={ <FAQ/> } />
                <Route path='/contact-us' element={ <ContactUs/> } />
            </Routes>
            <Footer/>
        </>
    )
}