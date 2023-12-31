import 'animate.css';

const AboutUs = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center mt-2 mb-5 animate__animated animate__slideInUp">The app designers</h2>                
                <div className=" my-4 animate__animated animate__slideInUp"> 
                    <div className="mb-5">
                        <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/Creadores BGF-min.jpg`}/>
                    </div>                   
                    <div className=" ">
                        <p className='fs-5' >
                            We are an Argentinian couple living in Australia. Our professions are social communicator and UX
                            UI designer (Naty) and physicist (Fer). We have travelled and played board games in many
                            countries. We have also lived in New York city and we are currently enjoying Melbourne.
                        </p>
                        <p className='fs-5' >
                            By the time we arrived in Manhattan we faced the difficulties of finding regular groups to play
                            our passion. We used many apps and gathered in many places, enjoying the company of many
                            great players and board game designers, but at first it wasn't so easy.
                        </p>
                        <p className='fs-5' > Then we realized that if we had a space where the community could join and offer their places
                            in a space specially prepared for us, an app that shows only what we want to see, that would be
                            amazing!
                        </p>                  
                        <p className='fs-5 mb-5' > So we decided to design and create Board Game Friends, just for our community, with love and
                            understanding of the things we care about regarding board games.
                        </p>
                        <p className='fs-5'><b>Just a gift for all who enjoy spending time playing and meeting with friends.</b></p>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default AboutUs