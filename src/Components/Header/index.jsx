import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";


const HeaderComponents = () => {
    const navData = [
        
     
        { name:'Home' , link:'/' },
        { name:'Movies' , link:'/movies' },
        { name:'TVseries' , link:'/series' },
        { name:'Search' , link:'/search' },
        // { name:'Contact Us' , link:'/contact' },
        // { name:'About' , link:'/about' },
       
    ]
    return (
        <>
            <header className="header">
                <Navbar bg="dark" expand="lg">
                    <Container>
                            <Navbar.Brand>MovieHub</Navbar.Brand>
                       <Navbar.Toggle aria-controls="navbarscroll"/>
                       <Navbar.Collapse id="navbarscroll">
                           <Nav className="me-auto my-2 my-lg-0"  navbarscroll>
                            {
                                navData.map((item)=>{
                                    return(
                                        <Nav.Link key={item.name}>
                                            <Link to={item.link}>

                                            {item.name}
                                            </Link>
                                        </Nav.Link>

                                    )
                                })
                            }

                           
                            </Nav>  
                        </Navbar.Collapse> 
                    </Container>
                </Navbar>

            </header>

        </>
    )
}

export default HeaderComponents;