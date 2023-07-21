import { useEffect, useState } from "react";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';


const KickstarterCampaign = () => {

  { defineElement(lottie.loadAnimation)}

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(()=> {
    // cambiamos el color del body a white al cargarse el componente
    document.documentElement.style.setProperty('--main-background-color', 'white');
    // al destruirse el componente cuando se navega a otra página, cambia el color del body al original
    return () => {
        document.documentElement.style.setProperty('--main-background-color', '#fff6f2');
    }
  }, [])

    return (
        <>
            <div className="container">

                {!imageLoaded && (
                    <>
                        <div className="d-flex justify-content-center align-items-center" style={{height:"60vh"}} >
                            <lord-icon
                                src="https://cdn.lordicon.com/pxruxqrv.json"
                                trigger="loop"
                                colors="primary:#F77F00,secondary:#FFB042"
                                style={{width:"150px",height:"150px"}}>
                            </lord-icon>
                        </div> 
                        <div style={{height:"40vh"}}></div>     
                    </>  
                )}

                <div className={imageLoaded ? '' : 'hidden'}>
                        <div className="d-flex justify-content-center">
                            <img
                                className="w-100" 
                                 src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-01.png`}  
                                onLoad={handleImageLoad}
                            />
                        </div>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-02.png`}  /> 
                </div>                
                <div style={{marginBottom:"5em"}}>
                    <h3 className=" mt-5 mb-5"><b>Be part of this playful community</b></h3>
                    <div className="d-flex align-items-center">                   
                        <div className="me-0">
                            <ul className="ps-5">
                                <li className="fs-5">Can't you coordinate a spot to play with your regular group of friends?</li>
                                <li className="fs-5">Are you moving to a new neighbourhood or city and want to play with people around?</li>
                                <li className="fs-5">Do you have a space at your home to share while playing board games?</li>
                                <li className="fs-5">Do you want to start a board game campaign and need friends to play it regularly?</li>
                                <li className="fs-5">Do you prefer not to own many games but join other players and enjoy their collections?</li>
                            </ul>
                            <p className="m-0 mt-4 fs-5" ><b>As board game fans we went through all these questions and the emotions behind them.
                            And now we have the opportunity to change these unfulfilled expectations for memorable moments</b></p>              
                        </div>
                                           
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center"> 
                        <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-04.png`}/>  
                    </div>
                    <div className="d-flex justify-content-center"> 
                        <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-05.png`}/>            
                    </div>
                    <div className="d-flex justify-content-center"> 
                        <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-06.png`}/>
                    </div>
                    <div className="d-flex justify-content-center"> 
                        <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-07.png`}/> 
                    </div>
                </div>
                <h3 className="mt-5 mb-4"><b>A UX UI Experience</b></h3>  
                <div className="mb-5">
                    <p className="fs-5">
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
                    <p className="mt-5 fs-5">
                        <b>The Board Game Prototype now is ready and completely navegable and responsive to use in Android and Apple mobile devices.</b>
                    </p>
                    <p className="fs-5 mt-5" style={{fontStyle:"italic"}}><b>We just need to develop and use it!</b></p>
                </div>

                <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-09.png`}/>
                </div>
                <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-10.png`}/> 
                </div>
                <div className="d-flex justify-content-center">
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/Creadores BGF-min.jpg`}/>
                </div>
                <div className="mt-4">
                    <p className="fs-5">
                        We are an Argentinian couple living in Australia. Our professions are social communicator and UX
                        UI designer (Naty) and physicist (Fer). We have travelled and played board games in many
                        countries. We have also lived in New York city and we are currently enjoying Melbourne.
                    </p>
                    <p className="fs-5">
                        By the time we arrived in Manhattan we faced the difficulties of finding regular groups to play
                        our passion. We used many apps and gathered in many places, enjoying the company of many
                        great players and board game designers, but at first it wasn't so easy.
                    </p>
                    <p className="fs-5"> Then we realized that if we had a space where the community could join and offer their places
                        in a space specially prepared for us, an app that shows only what we want to see, that would be
                        amazing!
                    </p>                  
                    <p className='fs-5 mb-5' > So we decided to design and create Board Game Friends, just for our community, with love and
                            understanding of the things we care about regarding board games.</p>
                    <p className='fs-5'><b>Just a gift for all who enjoy spending time playing and meeting with friends.</b></p>
                </div>
                <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-12.png`}/> 
                </div>                          
                <div className="my-5">
                    <p className="fs-5">We think bigger! We want to grow with the community so our future plans will 
                    include improvements and new sections to the app. So all of us can find and join board games events, 
                    competitions, personalize sections for board gamers clubs, stores and much more!</p>
                    <p className="fs-5 mt-4"><b>And of course we want the Board Game Friends app to be free forever!</b></p>
                    <p className="fs-5 mt-5"><b>We can make this together!</b></p>
                    <p className="fs-5 mt-5">Our main goal is to create an app that fulfils the expectations of the board gamers. As we are board game lovers and players as well, 
                        this project aims for continuous expansion, reaching as many countries as possible. 
                        Because all board gamers and people who don't play yet should have the opportunity to share great moments.</p>
                </div>
                <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/BGF+Kickstarter+Campaign+Agosto+2023-14.png`}/> 
                </div>
            </div>
        </>
    )
}

export default KickstarterCampaign