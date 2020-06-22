import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Poliza from '../Poliza/index'
import Nav from 'react-bootstrap/Nav'
import Secciones from '../Secciones/index'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'




const NavBar=()=>{



    return(
        <Navbar bg="primary" variant="dark" class="navbar navbar-expand-lg navbar-light bg-light mr-auto"  >
  <a class="navbar-brand" href="#">Proyecto</a>
  <span class="material-icons text-danger">policy</span>
  <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  
    <ul class="navbar-nav" >
          <div>
            <Link to="/poliza">
          <li class="nav-item active" >
          <Button edge="start"  color="inherit" aria-label="menu">Poliza</Button>
           </li>
          </Link>
            </div>

            <div>
            <Link to="/reclamos">
          <li class="nav-item active" >
          <Button edge="start"  color="inherit" aria-label="menu">Reclamo</Button>
           </li>
          </Link>
            </div>
            <div>
            <Link to="/seccionP">
          <li class="nav-item active" >
          <Button edge="start"  color="inherit" aria-label="menu">PolizaList</Button>
           </li>
          </Link>
            </div>
            <div>
            <Link to="/reclamosseccion">
          <li class="nav-item active" >
          <Button edge="start"  color="inherit" aria-label="menu">ReclamoList</Button>
           </li>
          </Link>
            </div>
   
    
    </ul>
  </div>
</Navbar>

    )
   
        
}
export default NavBar