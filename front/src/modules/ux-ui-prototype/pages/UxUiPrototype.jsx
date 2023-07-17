import 'animate.css';

const UxUiPrototype = () => {
    return (
        <>
            <div className="container">
                <h2 className="mb-3 animate__animated animate__fadeInUp text-center">A UX UI Experience</h2>  
                <div className="animate__animated animate__fadeInUp">
                    <div className='d-flex mb-5'>
                        <div className='me-5'>
                            <p className="fs-5">
                                It's been more than a year since we started working on this project. First, we gave shape to the idea to best fit the necessities we saw as board gamers players and then, 
                                tried to convert that idea into a quality and comfortable product.                    
                            </p>  
                            <p className="fs-5">
                                Board Games Friends started as a web design but after, with a lot of beautiful ideas, experiences and recommendations it migrated to be a complete app for Android and Apple.                   
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
                            <p className="fs-5">
                                The Board Games Prototype now is ready and completely navegable and responsive to use in Android and Apple mobile devices.
                            </p>
                            <p className="fs-5">We just need to develop and use it!</p>
                        </div>
                        <img className='w-50' src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/pergamino-min-PhotoRoom.png-PhotoRoom.png`}/>
                        {/* <img className='w-50' src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/bar png-min.png`}/> */}
                    </div>
                </div>
                <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF-09-min.png`}/>  
            </div>
        </>
    )
}

export default UxUiPrototype