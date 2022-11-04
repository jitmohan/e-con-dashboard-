import React, { useState } from 'react'
import OTPInput, { ResendOTP } from 'otp-input-react'
import { Button, Row, Col, Card } from "react-bootstrap";
import { FormGroup, Label } from 'reactstrap';
import "../Style.css";
import Modals from '../Modals/Modals';
import videoBg from '../Image/videoBg.mp4';

const OtpVerification = () => {
    const [OTP, SetOPT] = useState("");
    return (
        <div className='main'>
            <div className="econ_Section">
                <video src={videoBg} autoPlay loop muted />
                <div className="econ_Container">
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <Card className="cards form">
                                <img className="econ_icon" src="/Assets/logo econ.svg" alt="econ logo"></img>
                                <div className="econ_box">
                                    <p className="econ_sublines">Better way to mangage Business</p>
                                    <p className="econ_verify">Otp Verification</p>
                                    <div className='econ_userAlert'>
                                        <p className="econ_alert">we have sent a verification code to </p> <p className="econ_alert1">your registered Email ID /Mobile </p> <p className="econ_alert2">Number </p>
                                    </div>
                                </div>
                                <div className='econ_butnns'>
                                    <OTPInput
                                        className="econ_optsize"
                                        value={OTP}
                                        onChange={SetOPT}
                                        autoFocus
                                        OTPLength={6}
                                        otptype='number/text'
                                        secure
                                    />
                                </div>
                                <br />
                                <Button className="econ_btnverify"> VERIFY</Button>
                                <Row className='econ_resending'>
                                    <Col md={8} lg={7} sm={9} xs={6}>
                                        <div className='econ_didNot'>
                                            <FormGroup check inline>
                                                <Label check> Didn't receive the code </Label>
                                            </FormGroup>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={5} sm={3} xs={6}>
                                        <a href='#' className="econ_ResenddOtp">Resend</a>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <p className="econ_promotiones">Powered By <a href="http://www.vmatechlabs.com" >VMA Tech Labs </a></p>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default OtpVerification