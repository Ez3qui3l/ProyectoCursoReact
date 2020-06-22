import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Col,Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPolicy } from '../../components/Action/index'
import { departments } from '../reducers/index'




const Poliza=(props)=>{
  
  const handleUser=(e)=>{
    e.preventDefault()
    
    props.policies.name =e.target.value
    console.log(props.policies.name)
    
  };
  const handleAmount=(e)=>{
    e.preventDefault()
    
    props.bank.amount = e.target.value
    console.log(props.bank.amount)
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    
    props.createPolicy(props.policies.name)
    props.createPolicy(props.bank.amount)

  };
  
  



 
  
return(

    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Poliza  </Form.Label>
    <Form.Control type="text" placeholder="Enter" onChange={handleUser}/>
    <Form.Text className="text-muted"  >
      Ingresa nombre del beneficiario
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Label>Monto</Form.Label>
    <Form.Control type="number" placeholder="Amount" onClick={handleAmount}/>
    
    <div class="input-group-prepend">
    <span class="input-group-text">.00</span>
  </div>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>

  
</Form>
)





}
const mapStateToProps=(state)=>{
  console.log(state)
  return{
    
    policies: state.policies,
    bank: state.bank

  }
}

export default connect(mapStateToProps, {createPolicy})(Poliza)