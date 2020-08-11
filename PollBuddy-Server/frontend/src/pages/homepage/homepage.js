import React, {Component} from "react";
import "mdbreact/dist/css/mdb.css";
import "./homepage.scss";
import { MDBContainer } from "mdbreact";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";

export default class homepage extends Component {

  componentDidMount(){
    this.props.updateTitle("Home");
  }

  render() {
    return (
      <MDBContainer fluid className="page">
        <img src={logo} alt="logo" className="homepage_logo img-fluid" />
        <MDBContainer className="home_boxes">
          <MDBContainer className="box">
            <p>An interactive questionnaire platform made by students, for students, to strengthen lecture material and class attentiveness.</p>
            <MDBContainer>
              <Link to={"/login"}>
                <button className = "btn button">Login</button>
              </Link>
              <Link to={"/registerDefault"}>
                <button className = "btn button">Register</button>
              </Link>
            </MDBContainer>
          </MDBContainer>
          <MDBContainer className="box">
            <p>Already have a Poll Code? Enter it here.</p>

            <MDBContainer className="form-group">
              <label htmlFor="pollCodeText">Poll Code:</label>
              <input placeholder="K30SW8" className="form-control textBox"/>
            </MDBContainer>

            <Link to={"/pollviewer"}>
              <button className = "btn button">Join Poll</button>
            </Link>
          </MDBContainer>
        </MDBContainer>
      </MDBContainer>
    );
  }
}
