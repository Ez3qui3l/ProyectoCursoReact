import React from 'react'
import { Card } from 'react-bootstrap'

const principal=()=>{

    return(
        <div>
            <Card border="primary" text='success'>
  <Card.Body>
  <Card.Title>Aplicación con las siguientes caracteristicas:</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Ezequiel López Romero EZLR</Card.Subtitle>
  Utilizar react-bootstrap para la parte de diseño y componentes default (botón, forms, etc.)
	Un menú con dos botones, "Pólizas" y "Reclamos"
	La opción de "Pólizas" nos mostrara en pantalla un formulario para 
	poder crear una nueva póliza o borrar una existente
	La opción de "Reclamo" nos mostrara un Formulario para crear un nuevo reclamo
	Una sección donde podré ver la lista de pólizas que tiene la aseguradora
	Una sección donde podré ver la lista de reclamos que tiene la aseguradora
	Una sección donde podré ver la cantidad total que tiene la seguradora de fondo
	Una sección que montará el formulario que esté seleccionado
	Se deberá utilizar Redux
  </Card.Body>
</Card>
           
        </div>
    )
}
export default principal