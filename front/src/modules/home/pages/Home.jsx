import styles from "../../../styles/Home.module.css";
import 'animate.css';

const Home = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center animate__animated animate__zoomIn"><b>Board Games Friends is a community platform to coordinate face-to-face board games meetings </b></h2>
                <div className="my-5 d-flex justify-content-center align-items-center" style={{height:"200px"}}>
                        <p>Video</p>
                    </div>
                <div className={styles.mainContainer}>
                    <h3 className="text-center mb-3">Be part of this playful community!</h3>                   
                    <div className="d-flex justify-content-center">
                        <ul>
                            <li style={{fontSize:"17px"}}>Can't you coordinate a spot to play with your regular group of friends?</li>
                            <li style={{fontSize:"17px"}}>Are you moving to a new neighbourhood or city and want to play with people around?</li>
                            <li style={{fontSize:"17px"}}>Do you have a space at your home to share while playing board games?</li>
                            <li style={{fontSize:"17px"}}>Do you want to start a board game campaign and need friends to play it regularly?</li>
                            <li style={{fontSize:"17px"}}>Do you prefer not to own many games but join other players and enjoy their collections?</li>
                        </ul>
                    </div>
                    <p className="m-0 text-center" style={{fontSize:"17px"}}>As board games fans we went through all these questions and the emotions behind them.
                    And now we have the opportunity to change these unfulfilled expectations for memorable moments</p>              
                </div>
                
                <div className="d-flex align-items-center mt-5 mb-3">
                    <p className="align-item-center mb-0 fs-5 text-center">We feel that we need a space for us, for boardgamers. We deserve an app that lets us organize our meetings in the way we want to.
                        Nowadays we have to find information about group meetings jumping from Facebook groups to Meet up, Discord, Whatsapp and whatever source in which you can find a clue for the next possible meeting...
                        <br/>
                        <b>Why should we spend so much time finding the events that we want to play when we could have a complete and single app made for us?</b>
                    </p>
                    <img className="w-50" style={{}} src={`${import.meta.env.VITE_API_AWS_URL}/imagecompressor/casa png-min.png`}   />
                </div>
            </div>
        </>
    )
}

export default Home
