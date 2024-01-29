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

    <Container>
      <div>
        <Image 
          src={userimg[0].image}
          roundedCircle 
          width={50} 
          height={50} 
          className = "border border-3 border-dark ms-3">
        </Image>
        <button className='btn-post-home px-3'><span>Avvia un post</span></button>
      </div>
      <div>

      </div>
    </Container>
    
    {/* POST:
      - div con info account
      - descrizione post
      - immagine post 8se è presente)
      - div sezione mi piace + commenti
      - div per commentare, diffondere post, invia etc...
    */}
    
    </>
    
  )
}
