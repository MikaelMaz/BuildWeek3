import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../../homePost.css'


export default function HomePostComponent() {

  const userimg = useSelector((state) => state.user)

  return (
    <>
    <div>HomePostComponent</div>

    {/* box inserire nuovi post:
      - div con immagine acc e input
      - div con elementi da inserire nel post 
    */}

    <Container className='bg-light border rounded p-2'>
      <div className='d-flex'>
        <Image 
          src={userimg[0].image}
          roundedCircle 
          width={60} 
          height={60} 
          className = "border border-3 ms-3">
        </Image>
        <button className='btn-post-home px-3 py-1 ms-2 text-start text-secondary border-secondary'> Avvia un post </button>
      </div>

      <div className='btn-post-create mt-2'>
        <button className='border-0 py-2 rounded fw-semibold'><i class="bi bi-card-image me-2 text-primary"></i>Contenuti multimediali</button>
        <button className='border-0 py-2 mx-2 rounded fw-semibold'><i class="bi bi-calendar3 me-2 text-warning"></i>Evento</button>
        <button className='border-0 py-2 rounded fw-semibold'><i class="bi bi-file-text me-2 text-danger"></i>Scrivi un articolo</button>
      </div>
    </Container>
    
    {/* POST:
      - div con info account
      - descrizione post
      - immagine post 8se è presente)
      - div sezione mi piace + commenti
      - div per commentare, diffondere post, invia etc...
    */}

    <Container className='bg-light mt-3'>
      <div className=' d-flex justify-content-between '>
        <div className='d-flex '>
          <div>
          {/* img */}
          img
          </div>
          <div className='info-account'>
            <p className='mb-0'>Lavoropiù spa</p>
            <p className='mb-0'>follower</p>
            <p className='mb-1'>durata . <i className="bi bi-globe-americas"></i></p>
          </div>
        </div>
        <div>
          <i class="bi bi-three-dots"></i>
          <i class="bi bi-x"></i>
        </div>
      </div>

      <div className='post-content'>
        <p>descrizione</p>
        {/* img */}
        img
      </div>

      <div className='border-bottom d-flex justify-content-between'>
        <p>numero mi piace + icone</p>
        <p>numero diffusioni post</p>
      </div>

      <div className='btn-post-active mt-2 p-2 mb-2'>
        <button className='text-secondary border-0'><i class="bi bi-hand-thumbs-up"></i>Consiglia</button>
        <button className='text-secondary border-0'><i class="bi bi-chat-right-text"></i>Commenta</button>
        <button className='text-secondary border-0'><i class="bi bi-arrow-repeat"></i>Diffondi il post</button>
        <button className='text-secondary border-0'><i class="bi bi-send-fill"></i>Invia</button>
      </div>
    </Container>
    </>
  )
}
