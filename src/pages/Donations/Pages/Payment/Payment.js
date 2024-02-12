import React,{useState} from 'react';
import "./Payment.css";
import { ReactComponent as HospitalLocationIcon } from "./assets/HospitalLocation.svg";
import { ReactComponent as DoctorIcon } from "./assets/doctor.svg";
import { ReactComponent as WifiIcon } from "./assets/Wifi.svg";
import { ReactComponent as CardTypeIcon} from "./assets/cardType.svg";
import { ReactComponent as CashIcon} from "./assets/cash.svg";
import { ReactComponent as CreditCardIcon } from "./assets/CreditCard.svg";
import { ReactComponent as AmazonIcon} from "./assets/amazon.svg";
import { ReactComponent as GooglePayIcon } from "./assets/googlePay.svg";
import { ReactComponent as PhonePayIcon } from "./assets/phonePay.svg";
import { ReactComponent as PaytmIcon} from "./assets/paytm.svg";
import { ReactComponent as FreechargeIcon} from "./assets/freecharge.svg";
import { ReactComponent as MobikwickIcon} from "./assets/mobikwick.svg";
import { ReactComponent as BankIcon} from "./assets/Bank.svg";
import CardInnerShape1 from "./assets/cardInnerShape1.png";
import CardInnerShape2 from "./assets/cardInnerShape2.png";

const Payment = () => {
    const [clickToggle, setClickToggle] = useState(1) 
   
    return (
        <div>
            <div className='payment-parent-container'>
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
                <div className='card-container'>
                <img className='card-innerShape1' src={CardInnerShape1} alt='cardShape'/>
                <img className='card-innerShape2' src={CardInnerShape2} alt='cardShape'/>
                    <div className='card-name'>
                        <h1>Evelyn Taylor</h1>
                        <span className='wifi-icon'><WifiIcon /></span>
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
                        <div className='card-type'><CardTypeIcon /></div>
                    </div>
                </div>
                <div className='gradient-shadow'></div>
                <div className='payment-method-container'>
                    <h2>Choose Payment</h2>
                    <h1>Method</h1>
                    <div className='payment-method-content'>
                        <div className={clickToggle=== 1 ? "payment-cash" : "payment-otherOption"} onClick={() => setClickToggle(1)}>
                            <h1 className='m-left'>Pay Cash</h1>
                            <span className='m-right'><CashIcon /></span> 
                        </div>
                        <div className={clickToggle===2 ? "payment-cash" : "payment-otherOption"} onClick={() => setClickToggle(2)}>
                            <h1 className='m-left'>Debit / Credit Card</h1>
                            <span className='m-right'><CreditCardIcon /></span>
                        </div>
                        <div className={clickToggle===3 ? "payment-cash" : "payment-otherOption"} onClick={() => setClickToggle(3)}>
                            <h1 className='m-left'>UPI</h1>
                            <div className='upi-types m-right'>
                                    <AmazonIcon />
                                    <GooglePayIcon />
                                    <PhonePayIcon />
                                    <PaytmIcon />
                            </div>
                        </div>
                        <div className={clickToggle===4 ? "payment-cash" : "payment-otherOption"} onClick={() => setClickToggle(4)}>
                            <h1 className='m-left'>Wallet</h1>
                            <div className='wallet-type m-right'>
                                <FreechargeIcon/>
                                <MobikwickIcon/>
                            </div>
                        </div>
                        <div className={clickToggle===5 ? "payment-cash" : "payment-otherOption"} onClick={() => setClickToggle(5)}>
                            <h1 className='m-left'>Net Banking</h1>
                            <span className='m-right'><BankIcon /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment