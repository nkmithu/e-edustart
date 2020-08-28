import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Course.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import fakeData from '../../fakeData/courses';
import {useState} from 'react';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';

const Course = () => {
    const courseData = fakeData;
    const [allCourses,
        setCourses] = useState(courseData);
    const [cart,
        setCart] = useState([]);
    const handleAddCourse = (course) => {
        //  console.log("Course Added", course);
        const newCart = [
            ...cart,
            course
        ];
        setCart(newCart);

    }
    return (
        <section id="courses">
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={8} sm={12}>
                        <h4>Our Courses</h4>
                        <Row className="mt-3 align-items-center">
                            {allCourses.map(crs =>< SingleCourse course = {
                                crs
                            }
                            key = {
                                crs.id
                            }
                            handleAllCourse = {
                                handleAddCourse
                            } > </SingleCourse>)}
                        </Row>
                    </Col>
                    <Col lg={4} sm={12}>
                        <h4 className="text-right">View Cart</h4>
                        <Cart cart={cart}></Cart>
                        {cart.map(m =>< CartItem cart = {
                            m
                        } > </CartItem>)}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Course;