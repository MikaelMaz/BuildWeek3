import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';


export default function NavbarComponent() {
  return (

<>
 








 <Navbar  data-bs-theme="light" className='defaultNavbar border-bottom border-tertiary p-1'>
   <Container >
   
   <Navbar.Brand href="#" className='mx-1'>
           <img className='logo' src="/icon.png" alt=""  />
         </Navbar.Brand>
         <Form className="d-flex w-50 " >
           <Form.Control
             type="search"
             placeholder="Cerca"
             className="me-5 input-bar"
             aria-label="Search"
           />
         </Form>
     <Nav className="me-auto top-nav p-0">
       <Nav.Link href="#home" className='mx-3'><div className='d-flex justify-content-center '>
                   <i className="bi bi-house-fill"></i>
                 </div><span className='text-center'> Home</span></Nav.Link>
       <Nav.Link href="#features" className='mx-3'><div className='d-flex justify-content-center '>
                   <i className="bi bi-people-fill"></i>
                 </div> Rete</Nav.Link>
       <Nav.Link href="#pricing" className='mx-3'><div className='d-flex justify-content-center '>
                   <i className="bi bi-briefcase-fill"></i>
                 </div> Lavoro</Nav.Link>
       <Nav.Link href="#pricing" className='mx-3'><div className='d-flex justify-content-center '>
                   <i className="bi bi-chat-right-dots-fill"></i>
                 </div> Messaggistica</Nav.Link>
       <Nav.Link href="#pricing" className='mx-3'>  <div className='d-flex justify-content-center '>
                   <i className="bi bi-bell-fill"></i>
                 </div> Notifiche</Nav.Link>
                 <Nav.Link href="#pricing" className='mx-3'>  <div className='d-flex justify-content-center '>
                   <i class="bi bi-person-circle"></i>
                 </div> <span className='text-center'>tu</span></Nav.Link>
       
     </Nav>
     
       <Nav.Link href="#home" className='mx-3'><div className='d-flex justify-content-center '>
       <i class="bi bi-list"></i>
                 </div>Aziende</Nav.Link>
       <Nav.Link href="#features" className='mx-3 '><div className='d-flex justify-content-center '>
                 <span className='provapremium'> Prova Premium per 0 EUR</span> 
                 </div> </Nav.Link>
       
       
     
   </Container>
 </Navbar>
 </>


  );
}
