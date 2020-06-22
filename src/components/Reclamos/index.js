import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Col,Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { claimPolicy } from '../../components/Action/index'
import { departments } from '../reducers/index'




const Reclamos=(props)=>{
  

  //const amountRef = React.createRef()
  //const nameRef = React.createRef()
  //const handlerSubmit = (event)=>{
   // let estado={
    //amount:amountRef.current.value,
    //name:nameRef.current.value
   // }
    //console.log(estado)
    //props.createPolicy(estado)
//}

//const handlerSubmitName = (event)=>{
  
  //props.policies.name=nameRef.current.value
  
  //props.createPolicy(props.policies.name)
//}






  const handleUser=(e)=>{
    e.preventDefault()
    
    props.claimHistory.name =e.target.value
    console.log(props.claimHistory.name)
    
  };
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    props.claimPolicy(props.claimHistory.name)

  };
  
  



 
  
return(
<div>
        
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Reclamo  </Form.Label>
    <Form.Control type="text" placeholder="Enter"  onChange={handleUser}/>
    <Form.Text className="text-muted"  >
      Ingrese concepto del reclamo
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>

  
</Form>
</div>
)





}
const mapStateToProps=(state)=>{
  console.log(state)
  return{
    
    claimHistory : state.claimHistory

  }
}

export default connect(mapStateToProps, {claimPolicy})(Reclamos)