import React from 'react'
import line from "../../assets/line.png"
import Video from '../../components/Video';
import VideoClip from "../../assets/vid.mp4";
import ReelClip from "../../assets/reel.mp4";
import Reels from '../../components/Reels';

const Films = () => {
  return (
    <main>
      <div>
        <section className="section-films">
          <div className='section-films__bg-hero'>
          </div>
        </section>
        <section className='sectionfilms__content'>
          <div className="u-center-text u-margin-bottom-small">
            <div className='heading-primary'>
              <h1 className='heading-primary--main'>Our portfolio</h1>
              <p className='heading-primary--sub'>Have a look at our work</p>
            </div>
            <div className='u-margin-bottom-big' style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='section-video__video'>
            <div className='section-video__vid'>
              <Video width="100%" height="100%" video={VideoClip} />
            </div>
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
              <div className='heading-primary'>
                <h1 className='heading-primary--main' style={{ color: "#fff" }}>Dhruv & Diya</h1>
                <p className='heading-primary--sub' style={{ color: "#fff" }}>forever tied together | Jan 2021</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionfilms__trio">
          <div className="u-center-text u-margin-bottom-big">
            <div style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='sectionfilms__trio--reels u-center-text'>
            <div className='sectionfilms__trio--reels-sec'>
              <div className='heading-primary sectionfilms__trio--reels-sec-heading'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <div className='sectionfilms__trio--reels-sec-vid'>
                <Reels width="30%" height="100%" video={ReelClip} />
              </div>
            </div>
            <div className='sectionfilms__trio--reels-sec'>
              <div className='heading-primary sectionfilms__trio--reels-sec-heading'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <div className='sectionfilms__trio--reels-sec-vid'>
                <Reels width="30%" height="100%" video={ReelClip} />
              </div>
            </div>
            <div className='sectionfilms__trio--reels-sec'>
              <div className='heading-primary sectionfilms__trio--reels-sec-heading'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <div className='sectionfilms__trio--reels-sec-vid'>
                <Reels width="30%" height="100%" video={ReelClip} />
              </div>
            </div>
          </div>
        </section>
        <section className='sectionfilms__content'>
          <div className="u-center-text u-margin-bottom-small">
            <div className='heading-primary'>
              <h1 className='heading-primary--main'>Our portfolio</h1>
              <p className='heading-primary--sub'>Have a look at our work</p>
            </div>
            <div className='u-margin-bottom-big' style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='section-video__video'>
            <div className='section-video__vid'>
              <Video width="100%" height="100%" video={VideoClip} />
            </div>
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
              <div className='heading-primary'>
                <h1 className='heading-primary--main' style={{ color: "#fff" }}>Dhruv & Diya</h1>
                <p className='heading-primary--sub' style={{ color: "#fff" }}>forever tied together | Jan 2021</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionfilms__trio">
          <div className="u-center-text u-margin-bottom-big">
            <div style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='sectionfilms__trio--reels u-center-text'>
            <div className='sectionfilms__trio--reels-sec'>
              <div className='heading-primary sectionfilms__trio--reels-sec-heading'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <div className='sectionfilms__trio--reels-sec-vid'>
                <Reels width="30%" height="100%" video={ReelClip} />
              </div>
            </div>
            <div className='sectionfilms__trio--reels-sec'>
              <div className='heading-primary sectionfilms__trio--reels-sec-heading'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <div className='sectionfilms__trio--reels-sec-vid'>
                <Reels width="30%" height="100%" video={ReelClip} />
              </div>
            </div>
            <div className='sectionfilms__trio--reels-sec'>
              <div className='heading-primary sectionfilms__trio--reels-sec-heading'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <div className='sectionfilms__trio--reels-sec-vid'>
                <Reels width="30%" height="100%" video={ReelClip} />
              </div>
            </div>
          </div>
        </section>
        <section className='sectionfilms__content'>
          <div className="u-center-text u-margin-bottom-small">
            <div className='heading-primary'>
              <h1 className='heading-primary--main'>Our portfolio</h1>
              <p className='heading-primary--sub'>Have a look at our work</p>
            </div>
            <div className='u-margin-bottom-big' style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='section-video__video'>
            <div className='section-video__vid'>
              <Video width="100%" height="100%" video={VideoClip} />
            </div>
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
              <div className='heading-primary'>
                <h1 className='heading-primary--main' style={{ color: "#fff" }}>Dhruv & Diya</h1>
                <p className='heading-primary--sub' style={{ color: "#fff" }}>forever tied together | Jan 2021</p>
              </div>
            </div>
          </div>
        </section>
        <section className='sectionfilms__content'>
          <div className="u-center-text u-margin-bottom-small">
            <div className='heading-primary'>
              <h1 className='heading-primary--main'>Our portfolio</h1>
              <p className='heading-primary--sub'>Have a look at our work</p>
            </div>
            <div className='u-margin-bottom-big' style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='section-video__video'>
            <div className='section-video__vid'>
              <Video width="100%" height="100%" video={VideoClip} />
            </div>
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
              <div className='heading-primary'>
                <h1 className='heading-primary--main' style={{ color: "#fff" }}>Dhruv & Diya</h1>
                <p className='heading-primary--sub' style={{ color: "#fff" }}>forever tied together | Jan 2021</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionfilms__trio">
          <div className="u-center-text u-margin-bottom-big">
            <div style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='sectionfilms__trio--vid u-center-text'>
            <div className='sectionfilms__trio--vid-sec'>
              <div className='heading-primary'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <Video width="30%" height="100%" video={VideoClip} />
            </div>
            <div className='sectionfilms__trio--vid-sec'>
              <div className='heading-primary'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <Video width="30%" height="60%" video={VideoClip} />
            </div>
          </div>
        </section>
        <section className='sectionfilms__content'>
          <div className="u-center-text u-margin-bottom-small">
            <div className='heading-primary'>
              <h1 className='heading-primary--main'>Our portfolio</h1>
              <p className='heading-primary--sub'>Have a look at our work</p>
            </div>
            <div className='u-margin-bottom-big' style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='section-video__video'>
            <div className='section-video__vid'>
              <Video width="100%" height="100%" video={VideoClip} />
            </div>
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
              <div className='heading-primary'>
                <h1 className='heading-primary--main' style={{ color: "#fff" }}>Dhruv & Diya</h1>
                <p className='heading-primary--sub' style={{ color: "#fff" }}>forever tied together | Jan 2021</p>
              </div>
            </div>
          </div>
        </section>
        <section className='sectionfilms__content'>
          <div className="u-center-text u-margin-bottom-small">
            <div className='heading-primary'>
              <h1 className='heading-primary--main'>Our portfolio</h1>
              <p className='heading-primary--sub'>Have a look at our work</p>
            </div>
            <div className='u-margin-bottom-big' style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='section-video__video'>
            <div className='section-video__vid'>
              <Video width="100%" height="100%" video={VideoClip} />
            </div>
            <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
              <div className='heading-primary'>
                <h1 className='heading-primary--main' style={{ color: "#fff" }}>Dhruv & Diya</h1>
                <p className='heading-primary--sub' style={{ color: "#fff" }}>forever tied together | Jan 2021</p>
              </div>
            </div>
          </div>
        </section>
        <section className="sectionfilms__trio">
          <div className="u-center-text u-margin-bottom-big">
            <div style={{ position: "relative" }}>
              <img style={{ width: "200px", top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute", }} src={line} />
            </div>
          </div>
          <div className='sectionfilms__trio--vid u-center-text'>
            <div className='sectionfilms__trio--vid-sec'>
              <div className='heading-primary'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <Video width="30%" height="100%" video={VideoClip} />
            </div>
            <div className='sectionfilms__trio--vid-sec'>
              <div className='heading-primary'>
                <p className='heading-primary--sub u-margin-bottom-medium'>Have a look at our work</p>
                <h1 className='heading-primary--main-sm'>Our Portfolio</h1>
              </div>
              <Video width="30%" height="60%" video={VideoClip} />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Films