import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Poliza from '../Poliza/index'
import Nav from 'react-bootstrap/Nav'
import Secciones from '../Secciones/index'
import { Button, NavLink, Container } from 'react-bootstrap'



const NavBar=(props)=>{



    return(
        <Navbar bg="primary" variant="dark" class="navbar navbar-expand-lg navbar-light bg-light mr-auto"  >
  <a class="navbar-brand" href="#">Proyecto</a>
  <span class="material-icons text-danger">policy</span>
  <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav" >
    <li class="nav-item active" >
     
        
        <a class="nav-link" href="#Poliza">Pólizas</a>
        
      </li>
      <li class="nav-item active .px-2">
        <a class="nav-link" href="#recl">Reclamos</a>
      </li>
   
    <NavDropdown title="Secciones" id="basic-nav-dropdown">
        <NavDropdown.Item    href="#action/3.1" variant="light" bg="light"><span class="material-icons align-middle">list</span>Sección Polizas</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2" variant="light" bg="light"><span class="material-icons align-middle">list</span>Sección Reclamos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3" variant="light" bg="light"><span class="material-icons align-middle">list</span>Sección Cantidad</NavDropdown.Item>
    </NavDropdown>
    </ul>
  </div>
</Navbar>

    )
   
        
}
export default NavBar