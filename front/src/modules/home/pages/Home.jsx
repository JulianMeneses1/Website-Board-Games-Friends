import styles from "../../../styles/Home.module.css";
import 'animate.css';

const Home = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center mt-2 animate__animated animate__zoomIn"><b>A community platform to coordinate in-person board game meetings in North America, Europe, Australia and New Zealand </b></h2>
                <div className={styles.videoContainer}>
                    <video controls width="100%" height="100%">
                        <source src={`${import.meta.env.VITE_API_AWS_URL}/home/video presentacion.mp4`} type="video/mp4"/>
                        <source src={`${import.meta.env.VITE_API_AWS_URL}/home/video presentacion.webm`} type="video/webm"/>
                        <p>Your browser does not support the video tag, try to update your browser.</p>
                    </video>
                </div>
                <div className={styles.boxContainer}>
                    <h2 className="text-center mb-4">Be part of this playful community!</h2>                   
                    <div className="d-flex justify-content-center">
                        <ul className="custom-list">
                            <li className="fs-5 impar">Can't you coordinate a spot to play with your regular group of friends?</li>
                            <li className="fs-5 par">Are you moving to a new neighbourhood or city and want to play with people around?</li>
                            <li className="fs-5 impar">Do you have a space at your home to share while playing board games?</li>
                            <li className="fs-5 par">Do you want to start a board game campaign and need friends to play it regularly?</li>
                            <li className="fs-5 impar">Do you prefer not to own many games but join other players and enjoy their collections?</li>
                        </ul>
                    </div>                  
                    <div className="d-flex justify-content-center">                            
                        <div className={styles.textBox}>
                            <p className="m-0 fs-5">As board game fans we went through all these questions and the emotions behind them.
                            And now we have the opportunity to change these unfulfilled expectations for memorable moments</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.textContainer} d-flex align-items-center mt-5 mb-3`}>
                    <div className="mt-5">
                        <p className="fs-5">We feel that we need a space for us, for boardgamers. We deserve an app that lets us organize our meetings in the way we want to.</p>
                        <p className="fs-5">Nowadays we have to find information about group meetings jumping from Facebook groups to Meet up, Discord, Whatsapp 
                        and whatever source in which you can find a clue for the next possible meeting...</p>
                        <p className="mb-0 fs-5"><b>Why should we spend so much time finding the events that we want to play when we could have a complete and single app made for us?</b>
                        </p>
                    </div>
                    <img className={`${styles.imageContainer} w-50`} src={`${import.meta.env.VITE_API_AWS_URL}/others/casa png-min.png`} />
                </div>
            </div>
        </>
    )
}

export default Home
