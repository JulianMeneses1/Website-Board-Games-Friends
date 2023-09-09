import 'animate.css';

const UxUiPrototype = () => {
    return (
        <>
            <div className="container">
                <h2 className="mt-2 mb-5 animate__animated animate__fadeInUp text-center">A UX UI Experience</h2> 
                <video className='animate__animated animate__fadeInUp' controls width="100%" height="100%">
                        <source src={`${import.meta.env.VITE_API_AWS_URL}/ks campaign/BGF KS-09.mp4`} type="video/mp4"/>
                        <source src={`${import.meta.env.VITE_API_AWS_URL}/ks campaign/BGF KS-09.webm`} type="video/webm"/>
                        <p>Your browser does not support the video tag, try to update your browser.</p>
                </video>   
                <div className="animate__animated animate__fadeInUp mt-5">
                    <div className='d-flex'>
                        <div className='mt-4'>
                            <p className="mt-lg-1 fs-5">
                            It's been more than a year since we started working on this project. 
                            First, we gave shape to the idea to best fit the necessities we saw as 
                            board game players and then, 
                            tried to convert that idea into a quality and comfortable product.                    
                            </p>  
                            <p className="fs-5">
                                <b>Board Game Friends</b> started as a web design but after, with a lot of beautiful ideas, experiences and recommendations it migrated to become a complete mobile app.                   
                            </p> 
                            <p className="fs-5">
                            Then we managed to continue the research and did a lot of seasoned players <b>interviews</b> and <b>usability tests</b> to properly design all the components and content information of the new prototype.                    
                            </p> 
                            <p className="fs-5">
                            After several months working on this amazing project, we finally designed <b>more than 300 pages</b>, full of interconnected buttons, 
                            labels, cards, filters, pictures, texts, drawings, icons, calendars, board games and love.                 
                            </p> 
                            <p className="fs-5">
                            Lastly, it is important to confirm that we have thoroughly tested this design step by step and we are confident that all the community will enjoy it as much as we do. 
                            </p>                    
                            <p className="fs-5 mt-5">
                                The Board Game Friends app prototype is now ready and completely navegable and responsive to use in <b>Android</b> and <b>IOS</b> mobile devices.
                            </p>
                            <p className="fs-5"><b>We just need to develop and use it!</b></p>
                        </div>
                        <img className='d-lg-flex d-none w-50' src={`${import.meta.env.VITE_API_AWS_URL}/pergamino.png`}/>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default UxUiPrototype