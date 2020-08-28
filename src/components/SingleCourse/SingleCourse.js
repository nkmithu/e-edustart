import React from 'react';
import {Col, Card} from 'react-bootstrap';
import './SIngleCourse.css'

const SingleCourse = (props) => {
    const {name, img, price, instructor} = props.course;
    const handleAllCourse = props.handleAllCourse;
    return (

        <Col lg={4} sm={6} className="mb-3">
            <Card className="p-2">
                <figure><img src={img} alt="" className="img-fluid d-block mx-auto"/></figure>
                <p className="mb-0">
                    <small>By: {instructor}</small>
                </p>
                <h4 className="courseName mt-2">{name}</h4>
                <h5>Price:${price}</h5>
                <button
                    onClick={() => {
                    props.handleAllCourse(props.course)
                }}
                    className="btn-success pt-2">Enroll Now</button>
            </Card>
        </Col>

    );
};

export default SingleCourse;