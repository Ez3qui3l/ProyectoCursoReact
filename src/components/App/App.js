import React from 'react'
import { combineReducers, createStore } from 'redux'
import { Container, Col, Row, FormLabel } from 'react-bootstrap'
import NavBar from '../Navbar/index'
import '../App/Styles.css'
import Poliza from '../Poliza/index'
import Secciones from '../Secciones/index'
import Routes from '../../routes/routes'

const App =()=>{

    
    
    
    
    return(<Container>
         
         <Routes/>    
        
       {/*<Poliza></Poliza>*/}
       <hr></hr>
        
        <hr ></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <FormLabel class="footer">
        
      
Enlaces usados en el curso: 

<a href="https://www.w3schools.com/" class="hipervinculo" >w3schools</a>
<a href="https://flexboxfroggy.com/" class="hipervinculo">flexboxfroggy</a>
<a href="https://fontawesome.com/" class="hipervinculo">fontawesome</a>
<a href="https://themes.getbootstrap.com/" class="hipervinculo">getbootstrap</a>

</FormLabel>   
    </Container>
     )
    
}
export default App