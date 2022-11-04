import React, { useState } from 'react'
import { Row, Col, Card } from "react-bootstrap";
import { Input, InputGroup, InputGroupText, FormGroup, Button, Label } from 'reactstrap';
import "../Style.css";
import { Link, useNavigate } from "react-router-dom";
import videoBg from '../Image/videoBg.mp4';
import { useFormik } from "formik";
import { signSchema } from '../Schemas/index.jsx';
// import ResetPassword from '../ResetPassword/ResetPassword';

const initialValues = {
     Password: "",
     name: ""
 };

// const LoginEcon = () => {
//     const { values, errors, touched, handleBlur, handleChange, handleSubmit, } = useFormik(
//         {
//             initialValues: initialValues,
//             validationSchema: signSchema,
//             onSubmit: (values) => {
//                 console.log("ON SUBMIT DATA")
//                 console.log(values)
//             }
//         }
//     );
//     console.log(errors)
//     const [passwordType, setPasswordType] = useState("password");
//     const [showSuccess, setShowSuccess] = useState(false);

//     const togglePassword = () => {
//         if (passwordType === "password") {
//             setPasswordType("text")
//             return;
//         }
//         setPasswordType("password")
//     }

//     const submitForm = (e) => {
//         e.preventDefault();
//         if (values.name && values.Password) {
//             console.log("PASSWORD SUCCESSS")
//             setShowSuccess(true);
//             navigate('/ResetPassword')          
//         } else {
//             console.log('please fill the password')
//         }
//     }


const LoginEcon = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, } = useFormik(
        {
            initialValues: initialValues,
            validationSchema: signSchema,
            onSubmit: (values) => {
                console.log("ON SUBMIT DATA")
                console.log(values)
            }
        }
    );
    console.log(errors)
    const [passwordType, setPasswordType] = useState("password");
    const [showSuccess, setShowSuccess] = useState(false);

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (values.name && values.Password) {
            console.log("PASSWORD SUCCESSS")
            setShowSuccess(true);
            navigate('/ResetPassword')          
        } else {
            console.log('please fill the password')
        }
    }
    let navigate = useNavigate();   
    return (
        <div className='main'>
            <div className="econ_Section">

                <video src={videoBg} autoPlay loop muted />
                <div className="econ_Container">
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}> </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <Card className="cards form">
                                <img className="econ_icon" src="/Assets/logo econ.svg" alt="econ logo"></img>
                                <div className="econ_box">
                                    <p className="econ_subtit">Better way to mangage Business</p>
                                    <p className="econ_welcome">welcome back!</p>
                                    <div><p className="econ_message1">Hey,Enter Your Details to get sign in </p> <p className="econ_message2">to your account</p></div>
                                </div>
                                <div className="econ_userpass">
                                <form onSubmit={(e)=>submitForm(e)}>
                                    <InputGroup>
                                        <InputGroupText className="econ_users">
                                            <img className="econ_usernameIcon" src="/Assets/user.svg" alt='usernameIcon' />
                                        </InputGroupText >
                                        <Input type="text" autoComplete="off" name="name" placeholder="username" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                        {/* <Input placeholder="username" /> */}
                                    </InputGroup>
                                    {errors.name && touched.name ? (<p className='formError'>{errors.name}</p>) : null}
                                    <br />
                                    <InputGroup>
                                        <InputGroupText className="econ_users">
                                            <img className="econ_passwordIcon" src="/Assets/lock.svg" alt='passwordIcon' />
                                        </InputGroupText>
                                        <Input type={passwordType} autoComplete="off" name="Password" placeholder="Password" value={values.Password} onChange={handleChange} onBlur={handleBlur} />
                                        {/* <Input placeholder="Password" /> */}
                                        <InputGroupText className="econ_password" onClick={togglePassword}>
                                                {passwordType === "password" ? <img className='eyees' src='Assets/eye.svg' alt='usernameIcon' /> : <img className='eyees' src='/Assets/hide icon.svg' alt='usernameIcon' />}
                                        </InputGroupText>
                                    </InputGroup>
                                    {errors.Password && touched.Password ? (<p className='formError'>{errors.Password}</p>) : null}
                                    <br />
                                    <Button type='submit' className="econ_btn" onClick={submitForm}> SIGNIN </Button>                                     
                                    </form>
                                </div>
                                <Row className='econ_checkinandforgot'>
                                    <Col md={6} lg={6} sm={6} xs={6}>
                                        <div className='econ_checkboxes'>
                                            <FormGroup check inline>
                                                <Input type="checkbox" />
                                                <Label check> Keep me logged in </Label>
                                            </FormGroup>
                                        </div>
                                    </Col>
                                    <Col md={6} lg={6} sm={5} xs={6}>
                                        <Link to="/forgetpassword" className="econ_forgotPassword" >Forgot Password </Link>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <p className="econ_advertise">Powered By <Link to="http://www.vmatechlabs.com" >VMA Tech Labs </Link></p>

                    </Row>
                </div>
            </div>
        </div>  
    )
}
    export default LoginEcon