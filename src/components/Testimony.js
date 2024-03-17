import React from 'react'
import { FaCalendar, FaMapPin, FaStar } from 'react-icons/fa';

const Testimony = (props) => {
    return (
        <div className='testimony'>
            <div className={props.reverse ? 'testimony__card' : "testimony__card-reverse"}>
                <div className="testimony__card-left">
                    <div className='testimony__card-text u-margin-bottom-small'>
                        <div><FaCalendar size={"2rem"} color='#888'/>{new Date().toDateString()}</div>
                        <div><FaMapPin size={"2rem"} color='#888'/>Jaipur</div>
                        <div>{[1,2,3,4,5].map(()=>{
                            return <FaStar  size={"2rem"} color='#FFE200'/>
                        })}</div>
                    </div>
                    <div>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                    </div>
                    <div>
                        <h1 className='heading-primary--main-sm'>Meghan & Riven</h1>
                    </div>
                </div>
                <div className="testimony__card-right">
                    <div className='section-testimonials__content--circleImg'>
                        <img className='section-testimonials__content--circleImg-img' src={"https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony