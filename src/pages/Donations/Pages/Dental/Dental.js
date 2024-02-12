import React from 'react';
import "./Dental.css";
import { ReactComponent as HospitalLocationIcon } from "./assets/HospitalLocation.svg";
import { ReactComponent as DoctorIcon } from "./assets/doctor.svg";
import DentistImage from "./assets/dentistImage.png";
import DentalClient1 from "./assets/dentalClient1.png";
import DentalClient2 from "./assets/dentalClient2.png";

const Dental = () => {
    return (
        <div>
            <div className='dental-parent-container'>
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
                <div className='dental-img-container'>
                    <div className='dental-img-content'>
                        <img src={DentistImage} alt='dentalImage' />
                        <h1>Dental Braces</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                </div>
                <div className='dental-happyClients'>
                    <div className='dental-client-headContent'>
                    <div className='dental-clients-heading'>
                        <h2>Happy Clients</h2>
                        <h1>Gallery</h1>    
                    </div>
                    <div className='gradient-container'>
                        <div className='gradient-line'>
                            <div></div>
                        </div>
                    </div>
                    </div>
                    <div className='dental-clients-images'>
                        <img src={DentalClient1} alt='clientImage'/>
                        <img src={DentalClient2} alt='clientImage'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dental