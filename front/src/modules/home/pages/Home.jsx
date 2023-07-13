import styles from "../../../styles/Home.module.css"

export const Home = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center"><b>Board Games Friends is a community platform to coordinate face-to-face board games meetings </b></h2>
                <div className={styles.mainContainer}>
                    <h5>Be part of this playful community!</h5>
                    <ul>
                        <li>Can't you coordinate a spot to play with your regular group of friends?</li>
                        <li>Are you moving to a new neighbourhood or city and want to play with people around?</li>
                        <li>Do you have a space at your home to share while playing board games?</li>
                        <li>Do you want to start a board game campaign and need friends to play it regularly?</li>
                        <li>Do you prefer not to own many games but join other players and enjoy their collections?</li>
                    </ul>
                    <p className="m-0">As board games fans we went through all these questions and the emotions behind them.
                    And now we have the opportunity to change these unfulfilled expectations for memorable moments</p>              
                </div>
                
                <p className="mb-0">We feel that we need a space for us, for boardgamers. We deserve an app that lets us organize our meetings in the way we want to.
                    Nowadays we have to find information about group meetings jumping from Facebook groups to Meet up, Discord, Whatsapp and whatever source in which you can find a clue for the next possible meeting...
                    Why should we spend so much time finding the events that we want to play when we could have a complete and single app made for us?
                </p>
            </div>
        </>
    )
}