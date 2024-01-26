import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { UserExperience, addExperience } from '../redux/actions/actions'

export default function ExperienceComponent() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    if (user.length > 0) {
      dispatch(UserExperience(user[0]._id))
    }
  }, [user])

  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false); console.log(experience)};
  const handleShow = () => setShow(true);

  const [experience, setExperience] = useState([])



  return (
    <Container className='border-1 border-secondary border rounded-2 pb-1 my-2'>
      <Row>
        <Col xs={9}>
          <p className='fw-bold fs-5'>Esperienza</p>
        </Col>
        <Col xs={1}>
          <Button variant='' onClick={handleShow} size='sm' className='rounded-5 fw-bold '><i className="bi bi-plus-lg"></i></Button>
        </Col>
        <Col xs={1}>
          <Button variant='' size='sm' className='rounded-5 fw-bold'><i className="bi bi-pencil"></i></Button>
        </Col>
      </Row>
      <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci una nuova competenza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={(e) => setExperience(e.target.value)} type="text" className="form-control" placeholder="Inserisci la tua competenza" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); dispatch(addExperience(experience, user[0]._id))}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </Container>
  )
}