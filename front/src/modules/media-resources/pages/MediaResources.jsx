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
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from 'react-hot-toast';

const MediaResources = () => {

    return (
        <>
            <div className="container animate__animated animate__lightSpeedInRight">
                <h2 className="mb-4 mt-2 text-center "> Spread the Word: Shareable Resources of this Friendly Project</h2>
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
                    <div className='mb-4 mt-3 d-flex align-items-center gap-1'>
                        <h5 className='mb-0 me-2'>Share</h5>
                        <CopyToClipboard text="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <svg style={{ cursor: 'pointer' }} onClick={() => toast.success('Link Copied', { duration: 1500 })} xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                        </CopyToClipboard>
                        <Toaster />
                        <EmailShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf" >
                            <EmailIcon size="40" />
                        </EmailShareButton>
                        <FacebookShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <FacebookIcon size="40" />
                        </FacebookShareButton>
                        <TelegramShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <TelegramIcon size="40" />
                        </TelegramShareButton>
                        <TwitterShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <TwitterIcon size="40" />
                        </TwitterShareButton>
                        <WhatsappShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGamesFriendshitsKickstarterAmobileapptobringplayerstogether.pdf">
                            <WhatsappIcon size="40" />
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
                    <div className='mb-4 mt-3 d-flex align-items-center gap-1'>
                        <h5 className='mb-0 me-2'>Share</h5>
                        <CopyToClipboard text="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <svg style={{ cursor: 'pointer' }} onClick={() => toast.success('Link Copied', { duration: 1500 })} xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                            </svg>
                        </CopyToClipboard>
                        <Toaster/>
                        <EmailShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip" >
                            <EmailIcon size="40" />
                        </EmailShareButton>
                        <FacebookShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <FacebookIcon size="40" />
                        </FacebookShareButton>
                        <TelegramShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <TelegramIcon size="40" />
                        </TelegramShareButton>
                        <TwitterShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <TwitterIcon size="40" />
                        </TwitterShareButton>
                        <WhatsappShareButton url="https://dyj0wea98zx9n.cloudfront.net/downloads/BoardGameFriendsBrandAssets.zip">
                            <WhatsappIcon size="40" />
                        </WhatsappShareButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaResources