import { useEffect, useState } from "react";
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import BGFKS01 from '../../../assets/ks campaign/BGF KS-01.png';
import BGFKS02 from '../../../assets/ks campaign/BGF KS-02.png';
import BGFKS04 from '../../../assets/ks campaign/BGF KS-04.png';
import BGFKS05 from '../../../assets/ks campaign/BGF KS-05.png';
import BGFKS06 from '../../../assets/ks campaign/BGF KS-06.png';
import BGFKS07 from '../../../assets/ks campaign/BGF KS-07.png';
import BGFKS09mp4 from '../../../assets/ux ui/BGF KS-09.mp4';
import BGFKS09webm from '../../../assets/ux ui/BGF-KS-09.webm';
import BGFKS10 from '../../../assets/ks campaign/BGF KS-10.png';
import BGFKS11 from '../../../assets/ks campaign/BGF KS-11 Foto Creadores.jpg';
import BGFKS12 from '../../../assets/ks campaign/BGF KS-12.png';
import BGFKS14 from '../../../assets/ks campaign/BGF KS-14.png';


const KickstarterCampaign = () => {

    { defineElement(lottie.loadAnimation) }

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    useEffect(() => {
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
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }} >
                            <lord-icon
                                src="https://cdn.lordicon.com/pxruxqrv.json"
                                trigger="loop"
                                colors="primary:#F77F00,secondary:#FFB042"
                                style={{ width: "150px", height: "150px" }}>
                            </lord-icon>
                        </div>
                        <div style={{ height: "40vh" }}></div>
                    </>
                )}
                <div className={imageLoaded ? '' : 'hidden'}>
                    <div className="d-flex justify-content-center">
                        <img
                            className="w-100"
                            src={BGFKS01}
                            onLoad={handleImageLoad}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="w-100" src={BGFKS02} />
                </div>
                <div style={{ marginBottom: "5em" }}>
                    <h3 className=" mt-5 mb-4"><b>Be part of this playful community!</b></h3>
                    <div className="d-flex align-items-center">
                        <div className="me-0">
                            <ul className="ps-5 custom-list">
                                <li className="fs-5 impar">Can't you coordinate a spot to play with your regular group of friends?</li>
                                <li className="fs-5 par">Are you moving to a new neighbourhood or city and want to play with people around?</li>
                                <li className="fs-5 impar">Do you have a space at your home to share while playing board games?</li>
                                <li className="fs-5 par">Do you want to start a board game campaign and need friends to play it regularly?</li>
                                <li className="fs-5 impar">Do you prefer not to own many games but join other players and enjoy their collections?</li>
                            </ul>
                            <p className="m-0 mt-4 fs-5" >As board game fans we went through all of these questions and the emotions behind them.
                                And now we have the opportunity to change these unfulfilled expectations for <b>memorable moments.</b></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex justify-content-center">
                        <img className="w-100" src={BGFKS04} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img className="w-100" src={BGFKS05} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img className="w-100" src={BGFKS06} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <img className="w-100" src={BGFKS07} />
                    </div>
                </div>
                <h3 className="mt-5 mb-4"><b>A UX UI Experience</b></h3>
                <div className="mb-5">
                    <p className="fs-5">
                        It's been more than a year since we started working on this project. First, we gave
                        shape to the idea to best fit the necessities we saw as board
                        game players and then, tried to convert that idea into a quality and comfortable product.
                    </p>
                    <p className="fs-5">
                        <b>Board Game Friends</b> started as a web design but after, with a lot of beautiful ideas, experiences and recommendations it migrated to become a complete mobile app.
                    </p>
                    <p className="fs-5">
                        Then we managed to continue the research and did a lot of seasoned players <b>interviews</b> and <b>usability tests</b> to properly design all the components and content information of the new prototype.
                    </p>
                    <p className="fs-5">
                        After several months working on this amazing project, we finally designed <b>more than 300 pages</b>, full of interconnected buttons,
                        labels, cards, filters, pictures, texts, drawings, icons, calendars, board games and love.
                    </p>
                    <p className="fs-5">
                        Lastly, it is important to confirm that we have thoroughly tested this design step by step and
                        we are confident that all the community will enjoy it as much as we do.
                    </p>
                    <p className="mt-5 fs-5">
                        The Board Game Friends app prototype is now ready and completely navegable and responsive to use in <b>Android</b> and <b>IOS</b> mobile devices.
                    </p>
                    <p className="fs-5"><b>We just need to develop and use it!</b></p>
                </div>

                <div className="my-5">
                    <video controls width="100%" height="100%">
                        <source src={BGFKS09mp4} type="video/mp4" />
                        <source src={BGFKS09webm} type="video/webm" />
                        <p>Your browser does not support the video tag, try to update your browser.</p>
                    </video>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="w-100" src={BGFKS10} />
                </div>
                <h2 className="my-5"><b>Who we are</b></h2>
                <div className="d-flex justify-content-center">
                    <img className="w-100" src={BGFKS11} />
                </div>
                <div className="mt-4">
                    <p className="fs-5">
                        We are an Argentinian couple living in Australia. Our professions are social communicator and UX UI designer (Naty) and physicist (Fer).
                        We have travelled and played board games in many countries. We have also lived in New York city and
                        we are currently enjoying Melbourne.
                    </p>
                    <p className="fs-5">
                        By the time we arrived in Manhattan we faced the difficulties of finding regular groups
                        to play our passion. We used a lot of apps and gathered in many places,
                        enjoying the company of great players and board game designers, but at first it wasn't so easy.
                    </p>
                    <p className="fs-5"> Then we realized that if we had a space where the community could join
                        and offer their places, <b>an app that shows only what we want to see</b>, that would be amazing!
                    </p>
                    <p className='fs-5' > So we decided to design and create Board Game Friends, just for our community,
                        <b> with love and understanding of the things we care about regarding board games.</b></p>
                    <p className='fs-5'><i>Just a gift for all who enjoy spending time playing and meeting with friends.</i></p>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="w-100" src={BGFKS12} />
                </div>
                <div className="my-5">
                    <h2 className="my-5"><b>We think bigger!</b></h2>
                    <p className="fs-5">We want to grow with the community so our future plans will include
                        improvements and new sections for the app. So all of us can find and join board
                        game events, competitions, personalized sections for board gamers' clubs, stores and much more!
                    </p>
                    <p className="fs-5">And of course we want the Board Game Friends app to be free forever!</p>
                    <p className="fs-5"><b>We can make this together!</b></p>
                    <p className="fs-5">Our <b>main goal</b> is to create an app that fulfills the expectations
                        of the community. As we are board game lovers and players as well,
                        <b>this project aims for continuous expansion, reaching as many countries as possible.</b> </p>
                    <p className="fs-5">
                        Because all board gamers and people who don't play yet should have the opportunity to share great moments.
                    </p>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="w-100" src={BGFKS14} />
                </div>
                <div>
                    <h2 className="my-5"><b>Risks and challenges</b></h2>
                    <p className="fs-5">Building a popular mobile app to coordinate in-person
                        board game meetings is a big challenge, we know it! We've been working in its design
                        for more than a year, testing it and receiving a lot of valuable feedback. We are confident that our prototype
                        is appealing and solid, and we believe that the board game community will welcome this platform.
                    </p>
                    <p className="fs-5">There are risks associated with software development, such as
                        delivering the app in time and free of bugs and errors. We are aware of them and we have
                        previously studied the feasibility of our project with
                        software development companies, planning the project timeline and stretch goals accordingly.
                    </p>
                    <p className="fs-5">The design of the BGF app is based in the needs of the community and we
                        want to involve our supporters as much as possible and know their opinions. That's why many of the pledges 
                        include optional participation. In particular, before launching the app we will conduct
                        a beta testing with supporters to gather feedback and identify any potential bugs or usability issues.
                    </p>
                    <p className="fs-5">What about the app promotion? How many people will use the BGF network?
                        As more and more people start using the app, the variety and quantity of board game meetings
                        will increase, that's our goal! We plan to promote the BGF app in social networks, board game clubs,
                        shops, cafes, blogs and forums. And above all, we will be in contact with the board game community,
                        from content creators to everyday players, sharing our project and reaching out for their support.
                    </p>
                </div>
            </div>
        </>
    )
}

export default KickstarterCampaign