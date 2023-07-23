import 'animate.css';

const UxUiPrototype = () => {
    return (
        <>
            <div className="container">
                <h2 className="mt-2 animate__animated animate__fadeInUp text-center">A UX UI Experience</h2>  
                <div className="animate__animated animate__fadeInUp mb-5">
                    <div className='d-flex'>
                        <div className='mt-4'>
                            <p className="mt-lg-1 fs-5">
                                It's been more than a year since we started working on this project. First, we gave shape to the idea to best fit the necessities we saw as board gamers players and then, 
                                tried to convert that idea into a quality and comfortable product.                    
                            </p>  
                            <p className="fs-5">
                                Board Game Friends started as a web design but after, with a lot of beautiful ideas, experiences and recommendations it migrated to be a complete app for Android and Apple.                   
                            </p> 
                            <p className="fs-5">
                                Then we managed to continue the research and did a lot of seasoned players interviews to properly design all the components and content information of the new prototype.                    
                            </p> 
                            <p className="fs-5">
                                After several months working on this amazing design, we finally designed more than 300 pages, full of interconnected buttons, 
                                labels, cards, filters, pictures, texts, drawings, icons, calendars, board games and love.                 
                            </p> 
                            <p className="fs-5">
                                Lastly, it is important to confirm that we have thoroughly tested this design step by step and we 
                                are confident that all the community will enjoy it as much as we do. 
                            </p>                    
                            <p className="fs-5 mt-5">
                                <b>The Board Game Prototype now is ready and completely navegable and responsive to use in Android and Apple mobile devices.</b>
                            </p>
                            <p className="fs-5 mt-5"  style={{fontStyle:"italic"}}><b>We just need to develop and use it!</b></p>
                        </div>
                        <img className='d-lg-flex d-none w-50' src={`${import.meta.env.VITE_API_AWS_URL}/pergamino.png`}/>
                    </div>
                </div>
                <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/Para botón UX UI Prototype-min.png`}/>  
            </div>
        </>
    )
}

export default UxUiPrototype