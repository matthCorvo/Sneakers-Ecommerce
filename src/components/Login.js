import React from "react";
import { Button, Container, Modal } from "react-bootstrap";
import './styles/login.css'
import { SiFacebook } from "react-icons/si";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MyVerticallyCenteredModal(props) {


    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      ><Modal.Header closeButton style={{borderBottom: 'none', }}> 
    </Modal.Header>
       <form className="login-form" id='login'>
        <h2 className="text-center">Sign in</h2>
        <Container>		
        <div className="text-center social-btn text-white">
            <button className="btn btn-primary btn-block"><SiFacebook fontSize="25px" style={{marginRight:20}}/> Sign in with <b>Facebook</b></button>
            <button className="btn btn-info btn-block"><AiFillTwitterCircle fontSize="25px" style={{marginRight:20}}/> Sign in with <b>Twitter</b></button>
            <button className="btn btn-danger btn-block"><AiFillGoogleCircle fontSize="25px" style={{marginRight:20}}/> Sign in with <b>Google</b></button>
        </div>
		<div className="or-seperator"><i>or</i></div>
        <div className="form-group">
        	<div className="input-group">                
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" className="form-control " name="username" placeholder="Username" required="required" />
            </div>
        </div>
		<div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <Link to="/" className="float-right text-success">Forgot Password?</Link>
        </div>  
        
  <br/>
    <div className="hint-text">Don't have an account? <Link to="/"  href="#" className="text-success" >Register Now!</Link></div>
             
        </Container>		

            </form>
      </Modal>
    );
  }