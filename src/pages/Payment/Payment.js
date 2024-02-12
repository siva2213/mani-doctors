import React, { useContext, useState } from "react";
import "./Payment.css";
import HospitalLocation from "./assets/HospitalLocation.svg";
import Doctor from "./assets/doctor.svg";
import CardInner1 from "./assets/cardInnerShape1.png";
import CardInner2 from "./assets/cardInnerShape2.png";
import CardInnerDark1 from "./assets/cardInnerShape1Dark.png";
import CardInnerDark2 from "./assets/cardInnerShape2Dark.png";

import Amazon from "./assets/amazon.svg";
import Gpay from "./assets/googlePay.svg";
import Phonepe from "./assets/phonePay.svg";
import Paytm from "./assets/paytm.svg";
import FreeCharge from "./assets/freecharge.svg";
import Mobi from "./assets/mobikwick.svg";
import SadGirl from "./assets/sadGirl.png";
import SadGirlDark from "./assets/sadGirlDark.png";
import {
  Bank,
  Cardtype,
  CreditCard,
  Wifi,
  Withdraw,
} from "../../component/Svgs";
import { globalStateContext } from "../../App";
import {
  ButtonGradientSmall,
  ButtonToggle,
  PayBtn,
} from "../../component/Button";
import GradientText from "../../component/GradientText";
import { BottomNav2 } from "../../component/BottomNav";

const Payment = () => {
  const { darkMode } = useContext(globalStateContext);
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className='payment-parent-container dark:bg-darkBg'>
      {modal && (
        <div
          className={` fixed  w-screen h-screen ${
            darkMode ? "bg-[#00000020]" : "modal-backdrop"
          } backdrop-blur-md z-[10000] px-5  flex justify-center items-center`}
        >
          <div
            className={` h-[316px] max-w-[400px] bg-white m-auto rounded-[40px]  flex-1 dark:bg-darkBg flex  ${
              darkMode ? "modal-shadow-dark" : "modal-shadow"
            }`}
          >
            <div className='w-[180px] pl-5 pt-9 flex flex-col justify-between pb-9'>
              <div>
                <h4 className=' font-black text-[36px]  '>
                  {" "}
                  <GradientText>Sorry!</GradientText>
                </h4>
                <p className='  font-normal text-[16px] leading-4  dark:text-white'>
                  This option is not available, Choose{" "}
                  <span className=' font-bold'>Cash</span> instead.
                </p>
              </div>
              <ButtonGradientSmall
                onClick={() => setModal(false)}
                styles=' w-[102px] h-[47px] capitalize text-[16px] font-black  '
              >
                Cash
              </ButtonGradientSmall>
            </div>
            <div className=' flex flex-col justify-end  items-start'>
              <img
                src={darkMode ? SadGirlDark : SadGirl}
                alt='sad girl'
                className=' max-w-[200px] min-w-[195px] -ml-6'
              />
            </div>
          </div>
        </div>
      )}
      <div
        className={`card-container ${
          darkMode && "card-container-bg-dark drop-shadow-dark-sm"
        }`}
      >
        <img
          className='card-innerShape1'
          src={darkMode ? CardInnerDark1 : CardInner1}
          alt='cardShape'
        />
        <img
          className='card-innerShape2'
          src={darkMode ? CardInnerDark2 : CardInner2}
          alt='cardShape'
        />
        <div className=' absolute top-0 bottom-0 left-0 right-0'>
          <div className='card-name flex items-end'>
            <h1>Evelyn Taylor</h1>
            <Wifi fill='#fff' />
          </div>
          <div className='card-number'>
            <span>3215</span>
            <span>6584</span>
            <span>8468</span>
            <span>5888</span>
          </div>
          <div className='card-expire'>
            <div className='card-expire-content'>
              <h3>Expire</h3>
              <span>12/24</span>
            </div>
            <div className='card-expire-content'>
              <h3>CVV</h3>
              <span>229</span>
            </div>
            <div className='card-type'>
              <Cardtype fill='#fff' />
            </div>
          </div>
        </div>
      </div>
      <div className={darkMode ? "" : "gradient-shadow"}></div>
      <div className='payment-method-container'>
        <h2 className=' text-darkBg dark:text-white'>Choose Payment</h2>
        <h1 className='text-darkBg dark:text-white'>Method</h1>
        <div className='payment-method-content'>
          <PayBtn
            styles=' h-[62px]  w-full mt-2  text-[20px] px-3  font-black'
            selected={active === 1}
            onClick={() => {
              setActive(1);
            }}
          >
            {active === 1 ? (
              darkMode ? (
                <GradientText>Pay Cash</GradientText>
              ) : (
                <p>Pay Cash</p>
              )
            ) : (
              <p>Pay Cash</p>
            )}
            <Withdraw
              fill={
                active === 1
                  ? darkMode
                    ? "url(#gradient-stops)"
                    : "#fff"
                  : "url(#gradient-stops)"
              }
            />
          </PayBtn>
          <PayBtn
            styles=' h-[62px]  w-full mt-2  text-[20px] px-3  font-black'
            selected={active === 2}
            onClick={() => {
              setActive(2);
            }}
          >
            {active === 2 ? (
              darkMode ? (
                <GradientText>Debit / Credit Card</GradientText>
              ) : (
                <p>Debit / Credit Card</p>
              )
            ) : (
              <p>Debit / Credit Card</p>
            )}

            <CreditCard
              fill={
                active === 2
                  ? darkMode
                    ? "url(#gradient-stops)"
                    : "#fff"
                  : "url(#gradient-stops)"
              }
            />
          </PayBtn>
          <PayBtn
            styles=' h-[62px]  w-full mt-2  text-[20px] px-3  font-black'
            selected={active === 3}
            onClick={() => {
              setActive(3);
            }}
          >
            {active === 3 ? (
              darkMode ? (
                <GradientText>UPI</GradientText>
              ) : (
                <p>UPI</p>
              )
            ) : (
              <p>UPI</p>
            )}

            <div className=' flex'>
              <img src={Amazon} />
              <img src={Gpay} />
              <img src={Phonepe} />
              <img src={Paytm} />
            </div>
          </PayBtn>
          <PayBtn
            styles=' h-[62px]  w-full mt-2  text-[20px] px-3  font-black'
            selected={active === 4}
            onClick={() => {
              setActive(4);
            }}
          >
            {active === 4 ? (
              darkMode ? (
                <GradientText>Wallet</GradientText>
              ) : (
                <p>Wallet</p>
              )
            ) : (
              <p>Wallet</p>
            )}

            <div className=' flex '>
              <img src={FreeCharge} className=' mr-2' />
              <img src={Mobi} />
            </div>
          </PayBtn>
          <PayBtn
            styles=' h-[62px]  w-full mt-2  text-[20px] px-3  font-black'
            selected={active === 5}
            onClick={() => {
              setActive(5);
            }}
          >
            {active === 5 ? (
              darkMode ? (
                <GradientText>Net Banking</GradientText>
              ) : (
                <p>Net Banking</p>
              )
            ) : (
              <p>Net Banking</p>
            )}

            <Bank
              fill={
                active === 5
                  ? darkMode
                    ? "url(#gradient-stops)"
                    : "#fff"
                  : "url(#gradient-stops)"
              }
            />
          </PayBtn>
        </div>
      </div>

      <BottomNav2
        onClick={() => {
          setModal(true);
        }}
        btntext='Pay Cash'
      />
    </div>
  );
};

export default Payment;
