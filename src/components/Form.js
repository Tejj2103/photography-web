import React from 'react';

const Form = () => {
    return (
        <form action="#" class="form">
            <div class="form__group">
                <input type="text" class="form__input" placeholder="first name" id="name" required />
            </div>
            <div class="form__group">
                <input type="text" class="form__input" placeholder="last name" id="name" required />
            </div>
            <div class="form__group">
                <input type="text" class="form__input" placeholder="email address" id="name" required />
            </div>
            <div class="form__group">
                <input type="email" class="form__input" placeholder="phone no." id="email" required />
            </div>
            <div class="form__group row-group">
                <div class="form__radio-group row-group">
                    <div>
                        <input type="radio" class="form__radio-input" id="small" name="size" />
                        <label for="small" class="form__radio-label">
                            <span class="form__radio-button"></span>
                        </label>
                    </div>
                    <div className='u-center-text border-box border-box__active'>
                        <p className='heading-primary--sub'>Pre-wedding</p>
                    </div>
                </div>
                <div class="form__radio-group row-group">
                    <div>
                        <input type="radio" class="form__radio-input" id="large" name="size" />
                        <label for="large" class="form__radio-label">
                            <span class="form__radio-button"></span>
                        </label>
                    </div>
                    <div className='u-center-text border-box' >
                        <p className='heading-primary--sub'>wedding</p>
                    </div>
                </div>
            </div>
            <div class="form__group">
                <input type="email" class="form__input" placeholder="event details" id="email" required />
            </div>
            <div className='section-testimonials__btn'>
                <button className='btn-dis'>submit form</button>
            </div>
        </form>
    )
}

export default Form