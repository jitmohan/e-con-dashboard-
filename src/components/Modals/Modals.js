import React, { useEffect, useState } from 'react'
import { Modal, Row, Col, Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "../Style.css"

const Modals = (props) => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose =
        () => setShow(false);
    useEffect(() => {
        setShow(true)
    }, [props.show])
    return (
        <div>
            <Button className='form-inputs modalBtn' onClick={() => setShow(true)}>
                {props.btntext}
            </Button>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                modalheading={props.modalheading}
                modalinfo={props.modalinfo}
                modalmsg={props.modalmsg}
                btntext={props.btntext}
            >
                {/* <Modal.Header  >
                    
                </Modal.Header> */}
                <Modal.Body> 
                    <div className="heads">
                    <img className="econ_canbtn" src='/Assets/cross mark icon.svg' alt='ModalIcon' onClick={handleClose} />
                    </div>
                    <section>
                        <Container>
                            <div className="econ_ModalBody">
                                <div className="">
                                    <img src='/Assets/Success  icon.svg' className="econ_image" alt='image' />
                                </div>
                                <p className=' modalheading'>
                                    {props.modalheading}
                                </p>
                                <p className='modalinfo'>
                                    {props.modalinfo}
                                </p>
                                <div className="btn_center">
                                    <input
                                        onClick={() => { navigate('/') }}
                                        className='econ_bntoon'
                                        type='button'
                                        value={props.modalbtn}
                                    />
                                </div>
                            </div>
                        </Container>
                    </section>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Modals