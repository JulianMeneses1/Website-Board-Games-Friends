import 'animate.css';

const StretchGoals = () => {
    return (
        <>
            <div className="container ">
                <h2 className="text-center mt-2 mb-4 animate__animated animate__rollIn">Help us reaching the stretch goals to improve even more the app functionalities! </h2>
                <div className="animate__animated animate__rollIn">
                    <h5><b>Synchronized calendar</b></h5>
                    <p className="fs-5">
                        Fulfilling this goal would bring a new functionality to the app, enabling you 
                        to organize and share your available days and hours to play with your friends. You will easily and efficiently 
                        synchronize your calendar and those of the other players to find out what day and time everyone is available to play. This would 
                        significantly expedite the matter of coordination due to the difficulties that each one has when trying to find a free spot in their daily schedule.
                    </p>
                </div>
                <img className="w-100 animate__animated animate__rollIn" src="https://app-board-games-friends.s3.amazonaws.com/SGoals-1.webp"/>  
                <div className="my-5 animate__animated animate__rollIn">
                    <h5><b>Custom notifications</b></h5>
                    <p className="fs-5">
                        Upon reaching this second goal, everyone will gain access to a system for prompt 
                        notifications. By choosing the required game alert, you can be sure that as soon as 
                        someone publish an event to play it, you will receive a message thats allows you 
                        to join first!
                    </p>
                </div>
                <img className="w-100" src="https://app-board-games-friends.s3.amazonaws.com/SGoals-2.webp"/>  
                <div className="my-5">
                    <h5><b>APP barrierless</b></h5>
                    <p className="fs-5">
                        With this last stretch goal, we will extend this beautiful gaming activity to more players, by translating the app to Spanish, 
                        French, German and Chinese. Jumping the language barrier can help to create new bonds of friendship, 
                        spread the board game culture and unite the gaming community even more.
                    </p>
                </div>
                <img className="w-100" src="https://app-board-games-friends.s3.amazonaws.com/SGoals-17.webp"/>  
                <div className="my-5">
                    <h4 className="mb-3"><b>We think bigger!</b></h4>
                    <p className="fs-5">
                        We want to grow with the community so our future plans will include improvements and new sections to the app. So all of us can find and join board games events, competitions, personalize sections for board gamers clubs, stores and much more!
                    </p>
                    <p className="fs-5">
                        And of course we want the Board Games Friends app to be free forever!
                    </p>
                    <p className="fs-5">
                        We can make this together!
                    </p>
                    <p className="fs-5">                
                        Our main goal is to create an app that fulfils the expectations of the board gamers. 
                    </p>
                    <p className="fs-5">
                        As we are board game lovers and players as well, 
                        this project aims for continuous expansion, reaching as many countries as possible. 
                        Because all board gamers and people who don't play yet should have the opportunity to share great moments.
                    </p>
                </div>                
            </div>
        </>
    )
}

export default StretchGoals