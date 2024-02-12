import React, { useState, useEffect } from 'react';
import OtpTimer from "otp-timer";
import "./RegisterPopup.css";
import { ReactComponent as BadgeIcon } from "./assets/badge.svg";
import { ReactComponent as FlowerIcon } from "./assets/flower.svg";
import { ReactComponent as TrophyIcon } from "./assets/trophy.svg";
import RegisterImage1 from "./assets/registerImages1.png";
import RegisterImage2 from "./assets/registerImages2.png";
import RegisterImage3 from "./assets/registerImages3.png";
import PeoplesImg from "./assets/peoplesImg.png";

const RegisterPopup = () => {
    const [showpopup, setShowPopup] = useState(false);
    const [register, setRegister] = useState(false);
    const [verify, setVerify] = useState(false);
    const [otp, setOtp] = useState("");
const [minutes, setMinutes] = useState(0);
const [seconds, setSeconds] = useState(30);
    const onClose = () => {
        setShowPopup(false)
    }
    useEffect(() => {
        const interval = setInterval(() => {
          if (seconds > 0) {
            setSeconds(seconds - 1);
          }
      
          if (seconds === 0) {
            if (minutes === 0) {
              clearInterval(interval);
            } else {
              setSeconds(59);
              setMinutes(minutes - 1);
            }
          }
        }, 1000);
      
        return () => {
          clearInterval(interval);
        };
      }, [seconds]);
      const resendOTP = () => {
        if(seconds === 0){
            setMinutes(0);
            setSeconds(30);
        }
      };
    return (
        <>
            <div className='blur'></div>
            {/*<button onClick={() => setShowPopup(true)}>Open</button>*/}
            <div className='register-popUp'>
                {!verify ? (
                    <div className='popup-content' onClick={(e) => e.stopPropagation()}>
                        <div className='popup-block mt-32'>
                            <div className='first-block-content'>
                                <span className='block-content-value'><h1>50</h1>&nbsp;&nbsp;<h2>Cities</h2></span>
                                <h3>Clinics around 50 cities.</h3>
                            </div>
                            <div className='block-firstImg'><img src={RegisterImage1} alt='registerImages1' /></div>
                        </div>
                        <div className='popup-block mt-20'>
                            <div className='block-secondImg'><img src={RegisterImage2} alt='registerImages1' /></div>
                            <div className='first-block-content'>
                                <span className='block-content-value'><h1>1 Lakh</h1>&nbsp;&nbsp;<h2>Patients</h2></span>
                                <h3>Treated over 1 lakh patients.</h3>
                            </div>
                        </div>
                        <div className='popup-block mt-20'>
                            <div className='first-block-content'>
                                <span className='block-content-value'><h1>60</h1>&nbsp;&nbsp;<h2>Clinics</h2></span>
                                <h3>Total of 60 clinics across the country..</h3>
                            </div>
                            <div className='block-thirdImg'><img src={RegisterImage3} alt='registerImages1' /></div>
                        </div>
                        <div className='plain-line'></div>
                        <div className='register-form-container'>
                            <div className='register-form-content'>
                                {!register ? (
                                    <div className='register-form-details'>
                                        <h1>Register</h1>
                                        <div className='register-fields'>
                                            <input type="email" placeholder="Email Id" />
                                            <input type="number" placeholder="Phone Number" />
                                            <button type="submit" onClick={() => setRegister(true)}><span>SUBMIT</span></button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className='register-form-details'>
                                        <h1>Verification Code</h1>
                                        <div className='verify-fields'>
                                            <input type="text" pattern="\d*" maxlength="1" />
                                            <input type="text" pattern="\d*" maxlength="1" />
                                            <input type="text" pattern="\d*" maxlength="1" />
                                            <input type="text" pattern="\d*" maxlength="1" />
                                        </div>
                                        <div className='send-timer'>
                                            <span disabled={seconds > 0 || minutes >= 0} onClick={resendOTP}>Send Again</span>
                                            {seconds > 0 || minutes > 0 ? (
                                                <span>
                                                  {minutes < 10 ? `0${minutes}` : minutes}:
                                                  {seconds < 10 ? `0${seconds}` : seconds}
                                                </span>
                                              ) : (
                                                <span>Didn't recieve code?</span>
                                              )}
                                            
                                        </div>
                                        <div className='verify-button'>
                                            <button type="submit" onClick={() => setVerify(true)}><span>VERIFY</span></button>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        </div>
                    </div>

                ) : (
                    <div className='verified-container'>
                        <div className='verified-block mt-32'>
                            <div className='verified-block-top'>
                                <div className='verified-top-content'>
                                    <div>
                                        <TrophyIcon />
                                        &nbsp;
                                        <h3>50 Cities</h3>
                                    </div>
                                    <div>
                                        <FlowerIcon />
                                        &nbsp;
                                        <h3>1 Lakh Patients</h3>
                                    </div>
                                    <div>
                                        <BadgeIcon />
                                        &nbsp;
                                        <h3>60 Clinics</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='account-verified-content'>
                                <img src={PeoplesImg} alt='peoplesImg' />
                                <h1>Account Verified</h1>
                                <p style={{ width: "70%" }}>Browse into our App to book appointment
                                    with our finest doctors.</p>
                            </div>
                            <div className='verify-button mt-70 ml-25 mr-25'>
                                <button type="submit"><span>Get Started</span></button>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </>
    )
}

export default RegisterPopup;