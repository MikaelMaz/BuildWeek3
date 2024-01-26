import React, { useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { UserExperience } from '../redux/actions/actions'
export default function ExperienceComponent({userid}) {
    const dispatch = useDispatch()

    dispatch(UserExperience(userid))

    

    return (
        <Container className='border-1 border-secondary border rounded-2 pb-1 my-2'>
          <Row>
            <Col xs={9}>
              <p className='fw-bold fs-5'>Esperienza</p>
            </Col>
            <Col xs={1}> 
              <Button variant='' size='sm' className='rounded-5 fw-bold '><i className="bi bi-plus-lg"></i></Button>
            </Col>
            <Col xs={1}>
              <Button variant='' size='sm' className='rounded-5 fw-bold'><i className="bi bi-pencil"></i></Button>
            </Col>
          </Row>
        </Container>
    )
}