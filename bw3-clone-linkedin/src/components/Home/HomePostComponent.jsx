import React from 'react'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../../homePost.css'


export default function HomePostComponent() {

  const userimg = useSelector((state) => state.profile.user)

  return (
    <>
    <Container className='border rounded p-2'>
      <div className='d-flex'>
        <Image 
          src={userimg[0].image}
          roundedCircle 
          width={60} 
          height={60} 
          className = "border border-3 ms-1">
        </Image>
        <Button className='btn-post-home text-secondary px-3 py-1 ms-2 text-start border-secondary'> Avvia un post </Button>
      </div>

      <div className='btn-post-create mt-2'>
        <button className='border-0 py-2 rounded fw-semibold'><i className="bi bi-card-image me-2 text-primary"></i>Contenuti multimediali</button>
        <button className='border-0 py-2 mx-2 rounded fw-semibold'><i className="bi bi-calendar3 me-2 text-warning"></i>Evento</button>
        <button className='border-0 py-2 rounded fw-semibold'><i className="bi bi-file-text me-2 text-danger text-center"></i>Scrivi un articolo</button>
      </div>
    </Container>
    
    {/* POST:
      - div con info account
      - descrizione post
      - immagine post 8se è presente)
      - div sezione mi piace + commenti
      - div per commentare, diffondere post, invia etc...
    */}

    <Container className='border rounded mt-3'>
      <Row className=' d-flex justify-content-between '>
          <Col xs={12} md={2} className='d-flex'>
            <Image 
              src={userimg[0].image}
              roundedCircle 
              width={60} 
              height={60} 
              className = "border border-3 mt-2">
            </Image>
          </Col>
          <Col xs={12} md={7} className='info-account p-0'>
            <p className='mb-0 fs-6 fw-semibold'>Lavoropiù spa</p>
            <p className='mb-0'>follower</p>
            <p className='mb-1'>durata . <i className="bi bi-globe-americas"></i></p>
          </Col>
          <Col xs={12} md={2} className='btn-close-3dots-post p-0 text-end me-2'>
            <button><i className="bi bi-three-dots"></i></button>
            <button><i className="bi bi-x ms-1"></i></button>
            
            
          </Col>
      </Row>

      <Row className='post-content mt-2'>
        <p>descrizione</p>
        {/* img */}
        <p>contenuto multimediale</p>
      </Row>

      <Row className='border-bottom d-flex justify-content-between'>
        <Col><p>numero mi piace + icone</p></Col>
        <Col><p>numero diffusioni post</p></Col>
      </Row>

      <Row className='btn-post-active p-0'>
        <button className='text-secondary border-0 py-2'><i className="bi bi-hand-thumbs-up"></i>Consiglia</button>
        <button className='text-secondary border-0'><i className="bi bi-chat-right-text"></i>Commenta</button>
        <button className='text-secondary border-0'><i className="bi bi-arrow-repeat"></i>Diffondi il post</button>
        <button className='text-secondary border-0'><i className="bi bi-send-fill"></i>Invia</button>
      </Row>
    </Container>
    </>
  )
}
