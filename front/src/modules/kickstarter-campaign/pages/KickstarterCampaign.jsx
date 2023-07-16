import { useState } from "react";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';


const KickstarterCampaign = () => {

  { defineElement(lottie.loadAnimation)}

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

    return (
        <>
            <div className="container w-75">

            {!imageLoaded && (
         
            <div style={{height:"100vh"}} className="d-flex align-items-center justify-content-center">
                <lord-icon
                    src="https://cdn.lordicon.com/pxruxqrv.json"
                    trigger="loop"
                    delay="1000"
                    colors="primary:#4be1ec,secondary:#cb5eee"
                    style={{width:"150px",height:"150px"}}>
                </lord-icon>
                {/* <div style={{height:"90vh"}} className="d-flex align-items-center justify-content-center">
                    <div className="spinner-border text-primary" role="status">
                    </div>
                </div> */}
            </div>
      
        )}

            <div className={imageLoaded ? '' : 'hidden'}>
                    <div className="d-flex justify-content-center">
                        <img
                            className="w-100"
                            src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF-06-min.png`}      
                            onLoad={handleImageLoad}
                        />
                    </div>
            </div>
            <div className="my-5">
                <h3 className="text-center"><b>Be part of this playful community</b></h3>
                <div className="d-flex align-items-center">                   
                    <div className="me-5">
                        <ul>
                            <li style={{fontSize:"17px"}}>Can't you coordinate a spot to play with your regular group of friends?</li>
                            <li style={{fontSize:"17px"}}>Are you moving to a new neighbourhood or city and want to play with people around?</li>
                            <li style={{fontSize:"17px"}}>Do you have a space at your home to share while playing board games?</li>
                            <li style={{fontSize:"17px"}}>Do you want to start a board game campaign and need friends to play it regularly?</li>
                            <li style={{fontSize:"17px"}}>Do you prefer not to own many games but join other players and enjoy their collections?</li>
                        </ul>
                        <p className="m-0 text-center" style={{fontSize:"17px"}}>As board games fans we went through all these questions and the emotions behind them.
                        And now we have the opportunity to change these unfulfilled expectations for memorable moments</p>              
                    </div>
                    <img style={{width:"30%", marginBottom: "1px"}} src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF-02.png`}  />                    
                </div>
            </div>
                
          
                <div >
                <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF-04-min.png`}/>  
                    </div>
                    <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF-05-min.png`}/>            
                    </div>
                    <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF-06-min.png`}/>
                    </div>
                    <div className="d-flex justify-content-center"> 
                    <img className="w-100" src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/BGF-07-min.png`}/> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default KickstarterCampaign