import React from 'react'
import Testimony from '../../components/Testimony'

const Testimonials = () => {
    return (
        <main>
            <div>
                <section className="testimonials__hero">
                    <div className='testimonials__hero-bg'>
                    </div>
                </section>
                <section className='testimonials__content'>
                    <div className='testimonials__content--cards'>
                        <Testimony reverse={true}/>
                    </div>
                    <div className='testimonials__content--cards'>
                        <Testimony />
                    </div>
                    <div className='testimonials__content--cards'>
                        <Testimony reverse={true}/>
                    </div>
                    <div className='testimonials__content--cards'>
                        <Testimony />
                    </div>
                    <div className='testimonials__content--cards'>
                        <Testimony reverse={true}/>
                    </div>
                    <div className='testimonials__content--cards'>
                        <Testimony />
                    </div>
                    <div className='testimonials__content--cards'>
                        <Testimony reverse={true}/>
                    </div>
                    <div className='testimonials__content--cards'>
                        <Testimony />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Testimonials