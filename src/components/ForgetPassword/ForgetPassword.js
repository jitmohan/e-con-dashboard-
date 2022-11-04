import React from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Input, InputGroup, InputGroupText, FormGroup, Button, Label } from 'reactstrap';
import "../Style.css";
import { Link, useNavigate } from "react-router-dom";
import videoBg from '../Image/videoBg.mp4';
import { useFormik } from "formik";
import { signUpSchema } from '../Schemas';

const initialValues = {
    email: '',
};

const ForgetPassword = () => {
    let navigate = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik(
        {
            initialValues: initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values,) => {
                console.log(values);
            }
        });
    console.log(errors);
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
                                    <p className="econ_subline">Better way to mangage Business</p>
                                    <p className="econ_forpass">Forget Password</p>
                                    <div className='econ_messagge'>
                                        <p className="econ_msg">Please enter your registered email </p> <p className="econ_msg1">ID/mobile number.We will send </p> <p className="econ_msg2">a verification code </p>
                                    </div>
                                </div>
                                <div className="econ_mailbtn">
                                <form onSubmit={handleSubmit}>
                                    <InputGroup>
                                        <InputGroupText className="econ_email">
                                            <img className="econ_mail" src="/Assets/user.svg" alt='emailIcon' />
                                        </InputGroupText >
                                        <Input type="email" autoComplete="off" placeholder="Email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}
                                            />
                                        </InputGroup>
                                        {errors.email && touched.email ? (<p className='formError'>{errors.email}</p>) : null}
                                    <br />
                                    <Button onClick={() => { navigate('/OtpVerification') }} className="econ_otpbtn"> GET OTP </Button>
                                    </form>
                                </div>
                            </Card>
                        </Col>
                        <p className="econ_adver">Powered By <a href="http://www.vmatechlabs.com" >VMA Tech Labs </a></p>
                    </Row>
                </div>
            </div >
        </div>
    )
}

export default ForgetPassword