import React from 'react'
import Photograph from '../../components/PhotoGraph'
import { FaCalendar, FaMapPin, FaStar } from 'react-icons/fa';
const Photography = () => {
  return (
    <main>
      <div>
        <section className="photography-hero">
          <div className='photography-hero__bg-hero'>

          </div>
        </section>
        <section className='photography__content'>
          <div className='photography__content--cards'>
            <div className='photography__content--cards-img'>
              <img className='photography__content--cards-img--image' src='https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </div>
            <div className="photography__content--cards-text">
              <div className='testimony__card-text u-margin-bottom-small'>
                <div style={{ fontSize: "1.4rem" }}><FaCalendar size={"1.4rem"} color='#888' />{new Date().toDateString()}</div>
                <div style={{ fontSize: "1.4rem" }}><FaMapPin size={"1.4rem"} color='#888' />Jaipur</div>
                <div style={{ fontSize: "1.4rem" }}>{[1, 2, 3, 4, 5].map(() => {
                  return <FaStar size={"1.4rem"} color='#FFE200' />
                })}</div>
              </div>
              <div>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
              <div>
                <h1 className='heading-primary--main-sm'>Meghan & Riven</h1>
              </div>
              <div>
                <button className='photography__content--cards-text--btn'>Know more 	&#8594;</button>
              </div>
            </div>
          </div>
        </section>
        <section className='photography__content'>
          <div className='photography__content--cards'>
            <div className="photography__content--cards-text">
              <div className='testimony__card-text u-margin-bottom-small'>
                <div style={{ fontSize: "1.4rem" }}><FaCalendar size={"1.4rem"} color='#888' />{new Date().toDateString()}</div>
                <div style={{ fontSize: "1.4rem" }}><FaMapPin size={"1.4rem"} color='#888' />Jaipur</div>
                <div style={{ fontSize: "1.4rem" }}>{[1, 2, 3, 4, 5].map(() => {
                  return <FaStar size={"1.4rem"} color='#FFE200' />
                })}</div>
              </div>
              <div>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
              <div>
                <h1 className='heading-primary--main-sm'>Meghan & Riven</h1>
              </div>
              <div>
                <button className='photography__content--cards-text--btn'>Know more 	&#8594;</button>
              </div>
            </div>
            <div className='photography__content--cards-img'>
              <img className='photography__content--cards-img--image' src='https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </div>
          </div>
        </section>
        <section className='photography__content'>
          <div className='photography__content--cards'>
            <div className='photography__content--cards-img'>
              <img className='photography__content--cards-img--image' src='https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </div>
            <div className="photography__content--cards-text">
              <div className='testimony__card-text u-margin-bottom-small'>
                <div style={{ fontSize: "1.4rem" }}><FaCalendar size={"1.4rem"} color='#888' />{new Date().toDateString()}</div>
                <div style={{ fontSize: "1.4rem" }}><FaMapPin size={"1.4rem"} color='#888' />Jaipur</div>
                <div style={{ fontSize: "1.4rem" }}>{[1, 2, 3, 4, 5].map(() => {
                  return <FaStar size={"1.4rem"} color='#FFE200' />
                })}</div>
              </div>
              <div>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
              <div>
                <h1 className='heading-primary--main-sm'>Meghan & Riven</h1>
              </div>
              <div>
                <button className='photography__content--cards-text--btn'>Know more 	&#8594;</button>
              </div>
            </div>
          </div>
        </section>
        <section className='photography__content'>
          <div className='photography__content--cards'>
            <div className="photography__content--cards-text">
              <div className='testimony__card-text u-margin-bottom-small'>
                <div style={{ fontSize: "1.4rem" }}><FaCalendar size={"1.4rem"} color='#888' />{new Date().toDateString()}</div>
                <div style={{ fontSize: "1.4rem" }}><FaMapPin size={"1.4rem"} color='#888' />Jaipur</div>
                <div style={{ fontSize: "1.4rem" }}>{[1, 2, 3, 4, 5].map(() => {
                  return <FaStar size={"1.4rem"} color='#FFE200' />
                })}</div>
              </div>
              <div>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
              <div>
                <h1 className='heading-primary--main-sm'>Meghan & Riven</h1>
              </div>
              <div>
                <button className='photography__content--cards-text--btn'>Know more 	&#8594;</button>
              </div>
            </div>
            <div className='photography__content--cards-img'>
              <img className='photography__content--cards-img--image' src='https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </div>
          </div>
        </section>
        <section className='photography__content'>
          <div className='photography__content--cards'>
            <div className='photography__content--cards-img'>
              <img className='photography__content--cards-img--image' src='https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </div>
            <div className="photography__content--cards-text">
              <div className='testimony__card-text u-margin-bottom-small'>
                <div style={{ fontSize: "1.4rem" }}><FaCalendar size={"1.4rem"} color='#888' />{new Date().toDateString()}</div>
                <div style={{ fontSize: "1.4rem" }}><FaMapPin size={"1.4rem"} color='#888' />Jaipur</div>
                <div style={{ fontSize: "1.4rem" }}>{[1, 2, 3, 4, 5].map(() => {
                  return <FaStar size={"1.4rem"} color='#FFE200' />
                })}</div>
              </div>
              <div>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
              <div>
                <h1 className='heading-primary--main-sm'>Meghan & Riven</h1>
              </div>
              <div>
                <button className='photography__content--cards-text--btn'>Know more 	&#8594;</button>
              </div>
            </div>
          </div>
        </section>
        <section className='photography__content'>
          <div className='photography__content--cards'>
            <div className="photography__content--cards-text">
              <div className='testimony__card-text u-margin-bottom-small'>
                <div style={{ fontSize: "1.4rem" }}><FaCalendar size={"1.4rem"} color='#888' />{new Date().toDateString()}</div>
                <div style={{ fontSize: "1.4rem" }}><FaMapPin size={"1.4rem"} color='#888' />Jaipur</div>
                <div style={{ fontSize: "1.4rem" }}>{[1, 2, 3, 4, 5].map(() => {
                  return <FaStar size={"1.4rem"} color='#FFE200' />
                })}</div>
              </div>
              <div>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              </div>
              <div>
                <h1 className='heading-primary--main-sm'>Meghan & Riven</h1>
              </div>
              <div>
                <button className='photography__content--cards-text--btn'>Know more 	&#8594;</button>
              </div>
            </div>
            <div className='photography__content--cards-img'>
              <img className='photography__content--cards-img--image' src='https://images.pexels.com/photos/4942827/pexels-photo-4942827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
            </div>
          </div>
        </section>
      </div>
    </main>

  )
}

export default Photography