import React from 'react';
import "./OtherOption.css";
import Slider from './Components/Slider/Slider';
import {ReactComponent as StarIcon } from "./assets/Star.svg";
import {ReactComponent as DoubleQuotesIcon } from "./assets/doubleQuotes.svg";

import UserImg from "./assets/User.png"

const OtherOption = () => {
    return (
        <div className='otherOption-parent-container'>
            <div className='otherOption-content'>
                <div className='otherOption-content-block'>
                    <h3 className='sub-heading ml-25'>Other</h3>
                    <h1 className='heading ml-25'>Options</h1>
                    <div className='slider-container'><Slider /></div>
                </div>
                <div className='reviews-block-container'>
                    <div className='reviews-heading ml-25'>
                        <h3 className='sub-heading'>Read Patients</h3>
                        <h1 className='heading'>Reviews</h1>
                    </div>
                    <div className='gradient-slider-block mr-25'>
                        <div className='garadient-slider'>
                            <div className='slidebar'></div>
                        </div>
                    </div>
                </div>
                <div className='slider-reviews-block'>
                    <div className='slider-content ml-25 mr-25'>
                    <div className='review-detail'>
                        <div className='userImg'><img src={UserImg} alt='user'/></div>
                        <div className='userName'>
                            <h1>Ruth Frazier</h1>
                            <div className='rating-container'>
                            &nbsp;
                                <StarIcon/>
                                &nbsp;
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className='doubleQuotes'><DoubleQuotesIcon className="w-100"/></div>
                    </div>
                    <div className='review'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus</p>
                    </div>
                    </div>
                    <div className='slider-content ml-25 mr-25'>
                    <div className='review-detail'>
                        <div className='userImg'><img src={UserImg} alt='user'/></div>
                        <div className='userName'>
                            <h1>Ruth Frazier</h1>
                            <div className='rating-container'>
                            &nbsp;
                                <StarIcon />
                                &nbsp;
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className='doubleQuotes'><DoubleQuotesIcon className="w-100"/></div>
                    </div>
                    <div className='review'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherOption