import React, { useState } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Input, InputGroup, InputGroupText, FormGroup, Button, Label } from 'reactstrap';
import "../Style.css";
import Modals from '../Modals/Modals';
import videoBg from '../Image/videoBg.mp4';
import { useFormik } from "formik";
import { signSchema } from '../Schemas';

const initialValues = {
    Password: "",
    Confirm_Password: ""
};

const ResetPassword = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, } = useFormik(
        {
            initialValues: initialValues,
            validationSchema: signSchema,
            onSubmit: (values,) => {
                console.log(values)

            }
        }
    );
    console.log(errors)


    const [passwordType, setPasswordType] = useState("password");
    const [passwordTypes, setPasswordTypes] = useState("password");

    // const[confirmPassword, setConfirmPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    // const[allEntry, setAllEntry] =useState([]);
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const togglePasswordes = () => {
        if (passwordTypes === "password") {
            setPasswordTypes("text")
            return;
        }
        setPasswordTypes("password")
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (values.Password && values.Confirm_Password) {
            setShowSuccess(true);
        } else {
            console.log('please fill the password')
        }
    }
    return (
        <div>
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
                                    <p className="econ_subtitless">Better way to mangage Business</p>
                                    <p className="econ_reset">Reset Password</p>
                                    <div>
                                        <p className="econ_usermsg">Please enter a New password</p>
                                    </div>
                                </div>
                                <div className="econ_cofirmpass">
                                <form onSubmit={handleSubmit , submitForm}>                                   
                                        <InputGroup>
                                            <InputGroupText className="econ_password">
                                                <img className="econ_userIcon" src="/Assets/user.svg" alt='usernameIcon'/>
                                            </InputGroupText >
                                            <Input type={passwordType} autoComplete="off" name="Password" placeholder="Password" value={values.Password} onChange={handleChange} onBlur={handleBlur} />
                                            <InputGroupText className="econ_password" onClick={togglePassword}>
                                                {passwordType === "password" ? <img className='eyees' src='Assets/eye.svg' alt='usernameIcon' /> : <img className='eyees' src='/Assets/hide icon.svg' alt='usernameIcon' />}
                                            </InputGroupText>
                                        </InputGroup>
                                        {errors.Password && touched.Password ? (<p className='formError'>{errors.Password}</p>) : null}
                                        <br />
                                        <InputGroup>
                                            <InputGroupText className="econ_password">
                                                <img className="econ_eyeIcon" src="/Assets/lock.svg" alt='passwordIcon' />
                                            </InputGroupText>
                                            <Input type={passwordTypes}  autoComplete="off" name="Confirm_Password" placeholder="Confirm Password" value={values.Confirm_Password} onChange={handleChange} onBlur={handleBlur} />
                                            <InputGroupText className="econ_password" onClick={togglePasswordes}>
                                                {passwordTypes === "password" ? <img className='eyees' src='Assets/eye.svg' alt='usernameIcon' /> : <img className='eyees' src='/Assets/hide icon.svg' alt='usernameIcon' />}                                          
                                            </InputGroupText>
                                        </InputGroup>
                                        {errors.Confirm_Password && touched.Confirm_Password ? (<p className='formError'>{errors.Confirm_Password}</p>) : null}
                                        <br />
                                        <Button type='submit' className="econ_confirm"> CONFIRM </Button>
                                        
                                            {(showSuccess) &&
                                                <Modals className="econ_confirm"
                                                    modalheading={"Sucessful!"}
                                                    modalinfo={" your password has been changed  sucessfully"}
                                                    modalbtn={"Verify"}
                                                />
                                            }
                                        
                                    </form>
                                </div>
                            </Card>
                        </Col>
                        <p className="econ_promotion">Powered By <a href="http://www.vmatechlabs.com" >VMA Tech Labs </a></p>
                    </Row>
                </div>
            </div >
        </div>
    )
}

export default ResetPassword