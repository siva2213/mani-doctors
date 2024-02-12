import React from 'react';
import "./insurance.css";
import { ReactComponent as HospitalLocationIcon } from "./assets/HospitalLocation.svg";
import { ReactComponent as DoctorIcon } from "./assets/doctor.svg";
import { ReactComponent as HdfcLogo } from "./assets/HDFC_Life_Logo.svg";
import { ReactComponent as HeartIcon } from "./assets/heart.svg";
import { ReactComponent as StethoscopeIcon } from "./assets/stethoscope.svg";
import { ReactComponent as UnionIcon } from "./assets/Union.svg";
import InsuranceImage from "./assets/insuranceImage.png";
import InsuredPeople1 from "./assets/insuredpeople1.png";
import InsuredPeople2 from "./assets/insuredpeople2.png";
import InsuredPeople3 from "./assets/insuredpeople3.png";
import InsuredPeople4 from "./assets/insuredpeople4.png";

const Insurance = () => {
    return (
        <div className='insurance-parent-container'>
            <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Delhi</h1>
            <div className='location-container'>
                <div className='location-content'>
                    <div>
                        <span className='location-logo'><HospitalLocationIcon /></span>
                        &nbsp;&nbsp;
                        <span className='counts-block'>
                            <h2>50</h2>
                            <h3>Cities</h3>
                        </span>
                    </div>
                    <div>
                        <span className='location-logo'><DoctorIcon /></span>
                        &nbsp;&nbsp;
                        <span className='counts-block'>
                            <h2>60</h2>
                            <h3>Clinics</h3>
                        </span>
                    </div>
                </div>
            </div>
            <div className='insurance-blockOne'>
                <div className='insurance-blockOne-content'>
                    <h1>HDFC Life Insurance <br />Company Ltd.</h1>
                    <img src={InsuranceImage} alt="insuranceImage" />
                    <div className='hdfcLife-logo-container'>
                        <span className='hdfc-logo'><HdfcLogo /></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>
            <div className='insurance-buy-container'>
                <div className='insurance-buy-content'>
                    <div className='buy-now-container'>
                        <span className='heartContainer'><HeartIcon /></span>
                        &nbsp;&nbsp;
                        <label>BUY NOW</label>
                    </div>
                    <div className='insured-people'>
                        <span className='insured-people-number'>
                            <h1>40K</h1>
                            <span>
                                <img src={InsuredPeople1} alt="insuredPeople" />
                                <img src={InsuredPeople2} alt="insuredPeople" />
                                <img src={InsuredPeople3} alt="insuredPeople" />
                                <img src={InsuredPeople4} alt="insuredPeople" />
                            </span>
                        </span>
                        <label>Insured Peoples</label>
                    </div>
                </div>

            </div>
            <div className='advantage-container'>
                <div className='advantage-content'>
                    <div className='advantage-headContent'>
                        <div className='advantage-heading'>
                            <h2>Know The</h2>
                            <h1>Advantages</h1>
                        </div>
                        <div className='gradient-container'>
                            <div className='gradient-line'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className='riskManage-button m-top'>
                        <span className='union-imgContainer'><UnionIcon /></span>
                        &nbsp;&nbsp;
                        <h1>Risk Management</h1>
                    </div>
                    <div className='freedomChoice-button m-top'>
                        <span className='stethoscope-imgContainer'><StethoscopeIcon /></span>
                        &nbsp;&nbsp;
                        <h1>Freedom of Choice</h1>
                    </div>
                </div>
            </div>
            <div className='insurance-form-container'>
                <div className='insurance-form-content'>
                    <h2>Buy</h2>
                    <h1>Insurance</h1>
                    <div className='insurance-form'>
                        <input type="text" placeholder='Enter name' />
                        <input type="email" placeholder='Enter Email' />
                        <input type="number" placeholder='Enter Phone Number' />
                        <div className='approve-section'>
                            <div className="round">
                                <input type="checkbox" id="specifyColor" />
                                <label for="specifyColor"></label>
                            </div>
                            {/*<input type="checkbox" id='specifyColor' className='roundCheckbox' />*/}
                            <label>I approve to cantact me via email and phone number to discuss insurance</label>
                        </div>
                        <button className='buy-insurance'>BUY INSURANCE</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Insurance