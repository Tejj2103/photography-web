import React, { useState } from 'react'
import line from "../../assets/line.png"
import VideoClip from "../../assets/vid.mp4";
import Form from '../../components/Form';
import Video from '../../components/Video';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';


const Home = () => {
    const testiImages = [
        {
            id: 0,
            imagesUrl: "https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            text: "A professional photographer may be an employee, for example of a newspaper, or may contract to cover a particular planned event such as a wedding or graduation, or to illustrate an advertisement. Others, like fine art photographers, are freelancers, first making an image and then licensing or making printed copies of it for sale or display."
        },
        {
            id: 1,
            imagesUrl: "https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            text: "Amazing photographer may be the best one I could find for the most amazing day of my life."
        },
        {
            id: 2,
            imagesUrl: "https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            text: "Wow loved it, thanks Man for such amazing photos"
        },
    ]

    const [activeTestimony, setActiveTestimony] = useState(testiImages[1])

    const imageSlide = (direction, e) => {
        let index = e.target.id;
        if (direction === "left") {
            index--;
            if (index <= 0) {
                index = 0;
                setActiveTestimony(testiImages[index])
            } else {
                setActiveTestimony(testiImages[index])
            }

        } else if (direction === "right") {
            index++;
            if (index >= testiImages.length) {
                index = testiImages.length - 1;
                setActiveTestimony(testiImages[index])
            } else {
                setActiveTestimony(testiImages[index])
            }

        }

    }
    return (
        <main>
            <div>
                <section className="section-hero">
                    <div className='section-hero__bg-hero'>
                    </div>
                </section>
                <section className="section-content">
                    <div className="u-center-text u-margin-bottom-small">
                        <div className='heading-primary'>
                            <h1 className='heading-primary--main'>Our Portfolio</h1>
                            <p className='heading-primary--sub'>Have a look at our work</p>
                        </div>
                        <div className='u-margin-bottom-big' style={{ position: "relative" }}>
                            <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
                        </div>
                        <div className='section-content__images'>
                            <div className='section-content__images--1'>
                                <div className='image-big top'>
                                    <img className='img-tile' src="https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </div>
                                <div className='image-small bottom'>
                                    <img className='img-tile' src="https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </div>
                            </div>
                            <div className='section-content__images--2'>
                                <div className='image-small top'>
                                    <img className='img-tile' src="https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </div>
                                <div className='image-big bottom'>
                                    <img className='img-tile' src="https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </div>
                            </div>
                            <div className='section-content__images--3'>
                                <div className='image-big top'>
                                    <img className='img-tile' src="https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </div>
                                <div className='image-small bottom'>
                                    <img className='img-tile' src="https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-aboutus' id="about">
                    <div className="u-center-text">
                        <div className='heading-primary'>
                            <h1 className='heading-primary--random'>“It is a profound honor as a photographer to witness two people falling in love”</h1>
                        </div>
                    </div>
                    <div className='section-aboutus__card'>
                        <div className='section-aboutus__card--img'>
                            <img className='img-tile' src="https://images.pexels.com/photos/1185244/pexels-photo-1185244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        </div>
                        <div className='section-aboutus__card--text'>
                            <div className="u-center-text">
                                <div className='heading-primary'>
                                    <h1 className='heading-primary--main'>About Us</h1>
                                    <p className='heading-primary--sub'>Have a look at our work</p>
                                </div>
                                <div className='u-margin-bottom-big' style={{ position: "relative" }}>
                                    <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
                                </div>
                                <div>
                                    <p className='paragraph'>A professional photographer may be an employee, for example of a newspaper, or may contract to cover a particular planned event such as a wedding or graduation, or to illustrate an advertisement. Others, like fine art photographers, are freelancers, first making an image and then licensing or making printed copies of it for sale or display. Some workers, such as crime scene photographers, estate agents, journalists and scientists, make photographs as part of other work. Photographers who produce moving rather than still pictures are often called cinematographers, videographers or camera operators, depending on the commercial context.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-services'>
                    <div className="u-center-text u-margin-bottom-big">
                        <div className='heading-primary'>
                            <h1 className='heading-primary--main'>Our Services</h1>
                            <p className='heading-primary--sub'>KNOW WHAT ALL WE DO</p>
                        </div>
                    </div>
                    <div className='u-margin-bottom-big' style={{ position: "relative" }}>
                        <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
                    </div>
                    <div className='section-services__cards'>
                        <div className='section-services__cards--tile'>
                            <a href='/films'>
                                <img className='section-services__cards--img' src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                                <div className='overlay'>
                                </div>
                                <div className="overlay-text">
                                    <h2 className='heading-primary--main'>wedding</h2>
                                    <p className='heading-primary--sub'>KNOW WHAT ALL WE DO</p>
                                </div>
                            </a>
                        </div>
                        <div className='section-services__cards--tile'>
                            <a href='/films'>
                                <img className='section-services__cards--img' src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                                <div className='overlay'>
                                </div>
                                <div className="overlay-text">
                                    <h2 className='heading-primary--main'>pre-wedding</h2>
                                    <p className='heading-primary--sub'>KNOW WHAT ALL WE DO</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <section className='section-testimonials'>
                    <div className="u-center-text u-margin-bottom-big">
                        <div className='heading-primary'>
                            <h1 className='heading-primary--main'>Testimonials</h1>
                            <p className='heading-primary--sub'>Have a look at our work</p>
                        </div>
                        <div className='u-margin-bottom-big' style={{ position: "relative" }}>
                            <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
                        </div>
                        <div className='section-testimonials__content'>
                            <div>
                                <FaAngleLeft style={{ fontSize: "2rem", color: "#98946D", cursor: "pointer" }} id={activeTestimony.id} onClick={(e) => imageSlide("left", e)} />
                                {/* <button style={{ border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "#98946D", cursor: "pointer" }} id={activeTestimony.id} onClick={(e) => imageSlide("left", e)}>&#8592;</button> */}
                            </div>
                            <div className='section-testimonials__content--circleImg'>
                                <img className='section-testimonials__content--circleImg-img' src={activeTestimony.imagesUrl} />
                            </div>
                            <div>
                                <FaAngleRight style={{ fontSize: "2rem", color: "#98946D", cursor: "pointer" }} id={activeTestimony.id} onClick={(e) => imageSlide("right", e)} />
                                {/* <button style={{ border: "none", backgroundColor: "transparent", fontSize: "2rem", color: "#98946D", cursor: "pointer" }} id={activeTestimony.id} onClick={(e) => imageSlide("right", e)}>&#8594;</button> */}
                            </div>
                        </div>
                        <div className='section-testimonials__content--text'>
                            <p>{activeTestimony.text}</p>
                        </div>
                        <div className='section-testimonials__btn'>
                            <button className='btn-dis'>Discover all</button>
                        </div>
                    </div>
                </section>

                <section className='section-enquire' id="enquiry">
                    <div className="u-center-text u-margin-bottom-medium">
                        <div className='heading-primary'>
                            <h1 className='heading-primary--main'>Enquire Now</h1>
                            <p className='heading-primary--sub'>REACH OUT TO US</p>
                        </div>
                        <p className='paragraph'>For queries & quotation fill up the below form or email us directly at info@shubhknots.com or call us at +91-9711223344</p>
                    </div>
                    <div className='section-enquire__form'>
                        <div class="book">
                            <div class="book__form">
                                <Form />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-video'>
                    <div className='section-video__video'>
                        <div className='section-video__vid'>
                            <Video width="100%" height="100%" video={VideoClip} />
                        </div>
                        {/* <div style={{ position: "absolute", top: "50%", left: "50%",transform:"translate(-50%, -50%)", borderRadius: "3rem", width: "6rem", height: "6rem", border: "none", backgroundColor: "#797979" }}>
            <button style={{ position: "absolute", top: "50%", left: "50%",transform:"translate(-50%, -50%)", backgroundColor:"transparent", border:"none", cursor:"pointer", color:"#fff"}}>&#9658;</button>
        </div> */}
                        <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
                            <div className='heading-primary'>
                                <h1 className='heading-primary--main' style={{ color: "#fff" }}>Dhruv & Diya</h1>
                                <p className='heading-primary--sub' style={{ color: "#fff" }}>forever tied together | Jan 2021</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Home