import React from 'react'
import { Image, Row, Col, Button } from 'react-bootstrap'
import '../MainStyle.css'
export default function MainProfileComponent() {
  return (
    <div >
      <div>
        <div className='bg-danger text-end'>
          <i className="bi bi-camera-fill"></i>
        </div>
        <div className='d-flex justify-content-between align-items-end'>
          <Image src="https://www.raicultura.it/cropgd/900x520/dl/img/2020/04/08/1586351246504_abstract-2468874_1920.jpg" roundedCircle width={100} height={100}></Image>
          <i class="bi bi-pencil"></i>
        </div>
        <div>
          <Row>
            <Col xs={9}>
              <div className="d-flex align-items-baseline">
                <p>Nome Cognome</p>
                <Button variant="outline-primary" className="btnCheck d-flex mx-3 px-1 py-0 pe-2"><i className="bi bi-shield-check mx-1 fw-bold boldIcon"></i> <p className='m-0 fw-semibold'>Inizia la verifica</p></Button>
              </div>
              
              <p>Professione</p>
              <div className='d-flex'>
                <p className='text-muted'>Luogo &middot;</p>
                <a href='#' className='text-primary text-decoration-none mx-2'> Informazioni di contatto</a>
              </div>
              
            </Col>
            <Col xs={3}>
              <p>Facoltà</p>
            </Col>
          </Row>
          
          
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
