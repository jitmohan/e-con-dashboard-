import React from "react";
import "./chart.scss";

import { FaRegCalendar } from 'react-icons/fa';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, ButtonGroup, Row, Col } from "reactstrap";
import { } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import DonutChart from "./Donut/Donut";
// import "./Donut.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


// import 'bootstrap/dist/css/bootstrap.min.css';
const Chart = () => {
  return (
    <>


      <div className="shadow p-3 mb-5 bg-white rounded chartbar">
        <div className="container text-left">
          <div className="row">
            <div className="col-md-5 col-sm-12 col-lg-6">
              <h3>Integration overview</h3>
            </div>
            <div className="col-md-2 offset-md-2  col-sm-4 col-lg-1 col-xs-4">
              <div className="col-lg-1 col-md-8 col-sm-12">
                <div className="item" >
                  <ButtonGroup className="Droping_btn btn-sm btn-secondary">
                    <UncontrolledDropdown>
                      <DropdownToggle caret>
                        All
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem header>
                          Header
                        </DropdownItem>
                        <DropdownItem disabled>
                          Action
                        </DropdownItem>
                        <DropdownItem>
                          Another Action
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          Another Action
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </ButtonGroup>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-4 col-xs-4">
              <div className="item">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    monthly
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-4 col-xs-4 align-items-right pull-right">
             <FaRegCalendar className="calendar"/>
            </div>
          </div>


          <div className="row gx-5 align-items-center justify-content-evenly row-cols-2 dashchart" mg={3}>

            <div className="col-md-3 col-lg-2 col-sm-1 ">
              <div className="bottom">
                <div className="featuredChart">
                  <CircularProgressbar
                    value={60}
                    text={"60%"}
                    strokeWidth={10}
                    stroke="#FF6A9A"
                    className="stroke"
                    styles={buildStyles({
                      textColor: "red",
                      pathColor: "#b3e7db",
                      trailColor: "#21d29f"
                    })}
                  />
                </div>
                <p className="title">Success</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-1  ">
              <div className="bottom">
                <div className="featuredChart">
                  <CircularProgressbar
                    value={25}
                    text={"25%"}
                    strokeWidth={10}
                    stroke="#ff0000"
                    className="stroke"
                    styles={buildStyles({
                      textColor: "red",
                      pathColor: "#ff994e",
                      trailColor: "#ffe6d5"
                    })}
                  />
                </div>
                <p className="title">Pending</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-sm-1 ">
              <div className="bottom">
                <div className="featuredChart">
                  <CircularProgressbar
                    value={15}
                    text={"15%"}
                    strokeWidth={10}
                    stroke="#FF6A9A"
                    className="stroke"
                    styles={buildStyles({
                      textColor: "red",
                      pathColor: "#fc7a7a",
                      trailColor: "#f6d5d5"
                    })}
                  />
                </div>
                <p className="title">Failure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chart;
