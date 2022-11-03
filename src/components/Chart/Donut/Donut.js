import React from "react";
import "./Donut.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Row,Col} from 'react-bootstrap';

const Donut = () => {
    return (
       <div>
            <div className="featured">             
                <div className="donut">
                    <Row>
                    <Col md={{ span: 3,offset:1 }}>
                    <div className="bottom">
                        <div className="featuredChart">
                            <CircularProgressbar
                                value={60}
                                text={"60%"}
                                strokeWidth={10}
                                stroke="#21D29F"
                                className="stroke"
                            />
                        </div>
                        <p className="title">Success</p>
                    </div>
                    </Col>
                    <Col md={{ span: 3,offset:1 }}>
                    <div className="bottom">
                        <div className="featuredChart">
                            <CircularProgressbar
                                value={25}
                                text={"25%"}
                                strokeWidth={10}
                                stroke="#FF994E"
                                className="stroke"
                            />
                        </div>
                        <p className="title">Pending</p>
                    </div>
                    </Col>
                    <Col md={{ span: 3,offset:1 }}>
                    <div className="bottom">
                        <div className="featuredChart">
                            <CircularProgressbar
                                value={15}
                                text={"15%"}
                                strokeWidth={10}
                                stroke="#FF6A9A"
                                className="stroke"
                            />
                        </div>
                        <p className="title">Failure</p>
                    </div>
                    </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default Donut;