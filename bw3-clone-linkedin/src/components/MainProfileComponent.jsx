import React from 'react'
import { Image, Row, Col, Button, Dropdown} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import '../MainStyle.css'
export default function MainProfileComponent() {
  return (
    <div >
      <div>
        <div className='bg-danger text-end'>
          <i className="bi bi-camera-fill"></i>
        </div>
        <div className='d-flex justify-content-between align-items-end'>
          <Image 
          src="https://www.raicultura.it/cropgd/900x520/dl/img/2020/04/08/1586351246504_abstract-2468874_1920.jpg" 
          roundedCircle width={100} height={100} className = "border border-3 border-dark">
          </Image>
          <i class="bi bi-pencil"></i>
        </div>
        <div>
          <Row className='my-2 rowProfile'>
            <Col xs={8} className="lh-1">
              <div className="d-flex align-items-baseline">
                <p>Nome Cognome</p>
                <Button variant="outline-primary" className="btnCheck d-flex align-items-center justify-content-center mx-3 px-1 py-0 pe-2">
                  <i className="bi bi-shield-check mx-1 fw-bold boldIcon"></i>
                  <p className='m-0 fw-semibold'>Inizia la verifica</p>
                </Button>
              </div>

              <p>Professione</p>
              <div className='d-flex'>
                <p className='text-muted'>Luogo &middot;</p>
                <a href='#' className='text-primary text-decoration-none mx-2'> Informazioni di contatto</a>
              </div>
              <a href='#' className='text-primary text-decoration-none mx-2'>35 collegamenti</a>
            </Col>
            <Col xs={4} >
              <div className="d-flex align-items-center">
                <Image
                  src='../assets/logoUniVita.jpeg'
                  roundedCircle
                  width={50} height={50}
                />
                <p className='lh-1 ms-2'>Università della vita</p>
              </div>
            </Col>
          </Row>
          <div className="d-flex p-0 ButtonContainer mt-3 my-2">
            <Dropdown className="d-inline">
              <Dropdown.Toggle className="btnDisponibile mx-3 px-3 py-1" variant="primary" id="dropdown-basic" noCaret>
                Disponibile per
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Selezione del personale</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Servizi offerti</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-primary" className="btnCheck mx-3 px-3 py-1"><p className='m-0 fw-semibold'>Aggiungi sezione del profilo</p></Button>
            <Button variant="outline-primary" className="OtherButton mx-3 px-3 py-1">Altro</Button>
          </div>

        </div>

        {/* parte codice card che puzza */}
        <Carousel className="cardProfilo d-flex ">
          {/* aggiungere rounded + line-height alla card da css */}

          <Carousel.Item className='Card1 p-3 w-100' style={{ background: '#DDE7F1' }}>
          <div className='w-75 border mycarouselItem'>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <div>
                  <p classNama="fw-bolder"> Disponibile a lavorare</p>
                  <p>Ruoli di Full Stack Developer... </p>
                </div>
                <a href="#" className="fw-bold" style={{ textDecoration: 'none' }} > Mostra dettagli</a>
              </div>
              <i className="bi bi-pencil"></i>
            </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className='Card2 rounded-3 myCarouselBg p-3 w-100'>
          <div className='w-75 p-3 border rounded-3 mycarouselItem'>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <p classNama="fw-bolder"> Fai sapere che stai facendo selezione </p>
                <p> e attrai candidati qualificati </p>
              </div>
              <i className="bi bi-x-lg"></i>
            </div>
            <a href="#" className="fw-bold" style={{ textDecoration: 'none' }}> Inizia </a>
            </div>
          </Carousel.Item>

          <Carousel.Item className='Card3 rounded-3 myCarouselBg p-3 w-100'>
            <div className='w-75 p-3 border rounded-3 mycarouselItem'>
            <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p classNama="fw-bolder"> Metti in risalto le tue competenze </p>
              <p> e trova il lavoro dei tuoi sogni</p>
            </div>
            <i className="bi bi-x-lg"></i>
            </div>
            <a href="#" className="fw-bold" style={{ textDecoration: 'none' }}> Inizia </a>
            </div>
          </Carousel.Item>
          
          
        </Carousel>

      </div>
      <div></div>
      <div></div>
    </div>
  )
}
