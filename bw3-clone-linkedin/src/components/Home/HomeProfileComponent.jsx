import React from 'react'
import { Container,Image } from 'react-bootstrap'
import '../../homeProfile.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function HomeProfileComponent() {

  const username = useSelector(state=>state.user)
  
  console.log(username)

  return (
    <>
    <div className='home-profile-global'>
      <div>HomeProfileComponent</div>

    <Container className='border rounded p-3 my-3'>
      <div className='border-bottom'>
         <div className='mainBgHome text-end position-absolute'>
          {/* background con il banner */}
        </div>
        <div className='d-flex justify-content-center'>
        <Image 
              src={username[0].image}
              roundedCircle 
              width={80} 
              height={80} 
              className = "border border-3 border-dark ms-3d-block">
            </Image>
        </div>
        <div className='text-center mb-2'>
          <h6 className='fw-semibold mb-0'>Ti diamo il benvenuto </h6>
          <Link to={'/profile'} className='fw-semibold mb-0 d-block text-decoration-none text-black fs-6'>{username[0].name} !</Link>  {/* al click fa alla pagina profilo */}
          <a id='link-add-photo-home' className='text-primary text-decoration-none '>Aggiungi una foto</a>
        </div>
      </div>

      <div className='border-bottom d-flex justify-content-between my-3'>
        <div>
          <p className='text-secondary mb-0'>Collegamenti</p>
          <p className='fw-semibold'>Espandi la tua rete</p>
        </div>
        <div>
          <p className='text-primary fw-semibold'>24</p>
        </div>
      </div>

      <div className='border-bottom '>
        <p className='text-secondary mb-0 lh-1'>Accedi a strumenti e informazioni in esclusiva</p>
         <p className='fw-semibold d-flex align-items-center'> <i className="bi bi-square-fill text-warning me-2"></i> Prova Premium per 0 EUR</p>
      </div>

      <div className='d-flex align-items-center align-content-center mt-2'>
        <i className="bi bi-bookmark-fill fs-6"></i>
        <p className='fw-semibold mb-0 ms-2'>I miei elementi</p>
      </div>
    </Container>
      

    <Container className='border rounded pt-3 my-3 box-link-welcome'>
      <div className='border-bottom'>
       <p className='fw-semibold text-primary mb-2'>Gruppi</p> 
       <div className='d-flex justify-content-between align-items-center mb-2'>
        <p className='fw-semibold text-primary mb-0'>Eventi</p>
        <button className='btn-plus-welcome align-self-start'><i className="bi bi-plus"></i></button>
       </div>
        <p className='fw-semibold text-primary '>Hashtag seguiti</p>
      </div>
      <div>
        <p className='fs-6 text-secondary text-center my-2 py-1 fw-semibold text-decoration-none'>Scopri di più</p>
      </div>
    </Container>
    </div>
    

    </>
    
  )
}
