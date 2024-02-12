import { motion } from "framer-motion";
import React, { useState } from "react";
import { CarouselOne } from "../../components/Carousel";
import "./Dental.css";

const Dental = () => {
  const galleryCount = 4;
  const [galleryPos, setGalleryPos] = useState(0);
  return (
    <div>
      <div className='dental-parent-container'>
        <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Delhi</h1>
        <div className='location-container'>
          <div className='location-content'>
            <div>
              <span className='location-logo'>
                <img src='/images/HospitalLocation.svg' />
              </span>
              &nbsp;&nbsp;
              <span className='counts-block'>
                <h2>50</h2>
                <h3>Cities</h3>
              </span>
            </div>
            <div>
              <span className='location-logo'>
                <img src='/images/doctor.svg' />
              </span>
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
            <img src='/images/dentistImage.png' alt='dentalImage' />
            <h1>Dental Braces</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
        </div>
        <div className='dental-happyClients'>
          <div className='dental-client-headContent'>
            <div className='dental-clients-heading'>
              <h2>Happy Clients</h2>
              <h1>Gallery</h1>
            </div>
            <div className='gradient-container'>
              <div className=' relative bg-white h-[5px] w-[55px] rounded-[10px]'>
                <motion.div
                  initial={{ width: "0px" }}
                  animate={{
                    width: `${55 / galleryCount}px`,
                    translateX: `${galleryPos * (55 / galleryCount)}px`,
                  }}
                  className=' absolute h-[5px]  rounded-[10px] bg-gradient-to-r from-gradientPurple  to-gradientRed '
                ></motion.div>
              </div>
            </div>
          </div>
          <CarouselOne
            setPillPos={setGalleryPos}
            minHeight='150px'
            data={[
              <div className='dental-clients-images'>
                <img src='/images/dentalClient1.png' alt='clientImage' />
                <img src='/images/dentalClient2.png' alt='clientImage' />
              </div>,
              <div className='dental-clients-images'>
                <img src='/images/dentalClient1.png' alt='clientImage' />
                <img src='/images/dentalClient2.png' alt='clientImage' />
              </div>,
              <div className='dental-clients-images'>
                <img src='/images/dentalClient1.png' alt='clientImage' />
                <img src='/images/dentalClient2.png' alt='clientImage' />
              </div>,
              <div className='dental-clients-images'>
                <img src='/images/dentalClient1.png' alt='clientImage' />
                <img src='/images/dentalClient2.png' alt='clientImage' />
              </div>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dental;
