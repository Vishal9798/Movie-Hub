import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>SOCIALS :- </h3>
                            <ul className='socialIconsList'>
                             
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.https://www.linkedin.com/in/vishal-kumar-288269228" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://www.instagram.com/_vishal_kr_?igsh=OGQ5ZDc2ODk2ZA==" target="_blank">
                                        <BsInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/Vishal9798" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                               
                              
                             
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>@ Developed and Designed by Vishal Kumar</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;