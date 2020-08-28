import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Header.css';
import HeaderImg from './Image.svg';

const Header = () => {
    return (
        <header>
            <Container className="h-100">
                <Row className="align-items-center h-100">
                    <Col lg={6} sm={12}>
                        <h2>Education Needs Complete Solutlon</h2>
                        <p className="mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button href="#courses" className="btn-success py-2 px-3 mt-3">View Courses</button>
                    </Col>
                    <Col lg={6} sm={12}>
                        <figure><img src={HeaderImg} alt="" className="img-fluid d-block mx-auto"/></figure>
                    </Col>
                </Row>
            </Container>
        </header>

    );
};

export default Header;