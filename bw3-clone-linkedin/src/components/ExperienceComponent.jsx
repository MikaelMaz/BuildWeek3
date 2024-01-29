import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { UserExperience, addExperience, deleteExperience } from '../redux/actions/actions'

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

  const [experience, setExperience] = useState({
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
    area: ''
  })

  //console.log(UserExperience())

  const exper = useSelector(state => state.experience)
  console.log(exper)


//console.log(experience)

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
      {exper && exper.length > 0 &&
        exper[0].map((element, index) => (
        <div key={index} className="d-flex lh-1 px-2" >
          <div>
            <img src="https://www.ideabit.com/album/foto_full/formato-immagini-webp_710.jpg" width={100} height={80} className="me-3" alt="" />
          </div>
          <div>
            <p className="fw-bold">{element.role}</p>
            <p>{element.description}</p>
            <p className="text-secondary">{element.startDate.slice(0, 10)} - {element.endDate.slice(0, 10)}</p>
            <p className="text-secondary">{element.area}</p>
            <p></p>
          </div>
          <div>
            <button type="button" 
              onClick={() => {dispatch(deleteExperience(user[0]._id, element._id))}} 
              class="btn btn-danger"><i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
      ))}
      <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Inserisci una nuova competenza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={(e) => setExperience({...experience, company: e.target.value})} type="text" className="form-control" placeholder="Inserisci la tua azienda" />
          <input onChange={(e) => setExperience({...experience, role: e.target.value})} type="text" className="form-control" placeholder="Inserisci il tuo ruolo" />
          <input onChange={(e) => setExperience({...experience, startDate: e.target.value})} type="text" className="form-control" placeholder="Inserisci la tua data d'inizio" />
          <input onChange={(e) => setExperience({...experience, endDate: e.target.value})} type="text" className="form-control" placeholder="Inserisci la tua data di fine" />
          <input onChange={(e) => setExperience({...experience, description: e.target.value})} type="text" className="form-control" placeholder="Inserisci la tua descrizione" />
          <input onChange={(e) => setExperience({...experience, area: e.target.value})} type="text" className="form-control" placeholder="Inserisci il tuo luogo" />
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