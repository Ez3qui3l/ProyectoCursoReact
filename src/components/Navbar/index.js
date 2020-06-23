import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'




const NavBar=()=>{



    return(
        <Navbar bg="primary" variant="dark" class="navbar navbar-expand-lg navbar-light bg-light mr-auto"  >
          <div>
            <Link to="/principal">
          <li class="nav-item active" >
          <Button edge="start"  color="inherit" aria-label="menu">Proyecto <span class="material-icons text-danger">policy</span></Button>
          
           </li>
          </Link>
            </div>
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
            <div>
            <Link to="/montototal">
          <li class="nav-item active" >
          <Button edge="start"  color="inherit" aria-label="menu">MontoTotal</Button>
           </li>
          </Link>
            </div>
   
    
    </ul>
  </div>
</Navbar>

    )
   
        
}
export default NavBar