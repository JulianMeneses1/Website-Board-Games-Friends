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
            <div className="container" >

            {!imageLoaded && (
         
            <div style={{height:"60vh"}} className="d-flex align-items-center justify-content-center">
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
          <img
            className="w-100"
            // src="https://app-board-games-friends.s3.amazonaws.com/BGF-01.webp"
            //  src="https://d24f0qbfi4zcos.cloudfront.net/imagecompressor/BGF-06-min.png"
             src="https://d24f0qbfi4zcos.cloudfront.net/BGF-06.webp"
            onLoad={handleImageLoad}
          />
        </div>
          
             
                
                <h3 className=" my-4 text-center">Be part of this playful community</h3>
                <div className="d-flex mt-4">                   
                    <div>
                        <ul>
                            <li>Can't you coordinate a spot to play with your regular group of friends?</li>
                            <li>Are you moving to a new neighborhood or city and want to play with people around?</li>
                            <li>Do you have a space at your home to share while playing board games?</li>
                            <li>Do you want to start a board game campaign and need friends to play it regularly?</li>
                            <li>Do you prefer not to own many games but join other players and enjoy their collections?</li>
                        </ul>
                        <p>As board games fans we went through all of these questions and the emotions behind them. And now we have the opportunity to change these unfulfilled expectations for memorable moments.</p>
                    </div>
                    <img style={{width:"30%", marginBottom: "1px"}} src="https://app-board-games-friends.s3.amazonaws.com/BGF-02.webp"/>                    
                </div>
                
          
                <div >
                    <div className="d-flex">
                        <img className="w-50" src="https://app-board-games-friends.s3.amazonaws.com/BGF-04.webp"/>  
                        <img className="w-50" src="https://app-board-games-friends.s3.amazonaws.com/BGF-05.webp"/>
                    </div>
                    <div className="d-flex">
                        <img className="w-50" src="https://app-board-games-friends.s3.amazonaws.com/BGF-06.webp"/>
                        <img className="w-50" src="https://app-board-games-friends.s3.amazonaws.com/BGF-07.webp"/> 
                    </div>                   
                </div>
            </div>
        </>
    )
}

export default KickstarterCampaign