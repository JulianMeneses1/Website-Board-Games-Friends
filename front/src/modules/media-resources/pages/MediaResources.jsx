import 'animate.css';
import styles from "../../../styles/MediaResources.module.css";
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,  
    TelegramIcon,  
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
  } from "react-share";

const MediaResources = () => {
    return (
        <>
            <div className="container">
                <h2 className="mb-4 mt-2 text-center animate__animated animate__lightSpeedInRight"> Spread the Word: Shareable Resources of this Friendly Project</h2>
                <div className='mt-5'>
                    <h5><b>Board Game Friends hits Kickstarter: A mobile app to bring players together</b></h5>
                    <div className='d-flex align-items-center gap-3 flex-wrap-reverse '>
                        <a download href="./BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">Board Games Friends hits Kickstarter A mobile app to bring players together.pdf</a>
                        <div className={styles.downloadIconContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </div>                        
                    </div>
                    <div className='mb-4 mt-2 d-flex align-items-center gap-1'>
                        <h5 className='mb-0 me-2'>Share</h5>
                    
                        <EmailShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf" >
                            <EmailIcon size="40"/>
                        </EmailShareButton>
                        <FacebookShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <FacebookIcon size="40"/>
                        </FacebookShareButton>
                        <TelegramShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <TelegramIcon size="40"/>
                        </TelegramShareButton>
                        <TwitterShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <TwitterIcon size="40"/>
                        </TwitterShareButton>
                        <WhatsappShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <WhatsappIcon size="40"/>
                        </WhatsappShareButton>
                  
                    </div>
                    <h5><b>Board Game Friends app Brand Assets</b></h5>
                    <div className='d-flex align-items-center gap-3 flex-wrap-reverse'>
                        <a download href="./BoardGameFriendsBrandAssets.zip">Board Game Friends BrandAssets.zip</a>
                        <div className={styles.downloadIconContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                            </svg>
                        </div>
                    </div>
                    <div className='mb-4 mt-2 d-flex align-items-center gap-1'>
                        <h5 className='mb-0 me-2'>Share</h5>
                    
                        <EmailShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip" >
                            <EmailIcon size="40"/>
                        </EmailShareButton>
                        <FacebookShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <FacebookIcon size="40"/>
                        </FacebookShareButton>
                        <TelegramShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <TelegramIcon size="40"/>
                        </TelegramShareButton>
                        <TwitterShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <TwitterIcon size="40"/>
                        </TwitterShareButton>
                        <WhatsappShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <WhatsappIcon size="40"/>
                        </WhatsappShareButton>
                  
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaResources