import React from 'react';
import "./insurance.css";

const Insurance = () => {
    return (
        <div className='insurance-parent-container'>
            <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Delhi</h1>
            <div className='location-container'>
                <div className='location-content'>
                    <div>
                        <span className='location-logo'><img src="/images/HospitalLocation.svg" /></span>
                        &nbsp;&nbsp;
                        <span className='counts-block'>
                            <h2>50</h2>
                            <h3>Cities</h3>
                        </span>
                    </div>
                    <div>
                        <span className='location-logo'><img src="/images/doctor.svg" /></span>
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
                    <img src="/images/insuranceImage.png" alt="insuranceImage" />
                    <div className='hdfcLife-logo-container'>
                        <img src="/images/HDFC_Life_Logo.svg" alt="hdfcLogo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
                </div>
            </div>
            <div className='insurance-buy-container'>
                <div className='insurance-buy-content'>
                    <div className='buy-now-container'>
                        <span className='heartContainer'><img src="/images/heart.svg" alt="heart" /></span>
                        &nbsp;&nbsp;
                        <label>BUY NOW</label>
                    </div>
                    <div className='insured-people'>
                        <span className='insured-people-number'>
                            <h1>40K</h1>
                            <span>
                                <img src="/images/insuredpeople1.png" alt="insuredPeople" />
                                <img src="/images/insuredpeople2.png" alt="insuredPeople" />
                                <img src="/images/insuredpeople3.png" alt="insuredPeople" />
                                <img src="/images/insuredpeople4.png" alt="insuredPeople" />
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
                        <span className='union-imgContainer'><img src="/images/union.svg" alt="union" /></span>
                        &nbsp;&nbsp;
                        <h1>Risk Management</h1>
                    </div>
                    <div className='freedomChoice-button m-top'>
                        <img src="/images/stethoscope.svg" alt="sthethoscope" />
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