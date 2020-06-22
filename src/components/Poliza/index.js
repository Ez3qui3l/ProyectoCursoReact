import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPolicy } from '../../components/Action/index'




const Poliza=(props)=>{
  

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
<div>
        
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Poliza  </Form.Label>
    <Form.Control type="text" placeholder="Enter"  onChange={handleUser}/>
    <Form.Text className="text-muted"  >
      Ingresa nombre del beneficiario
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    
    <Form.Label>Monto</Form.Label>
    <Form.Control type="number" placeholder="Amount" onContextMenu= {handleAmount} />
    
    <div class="input-group-prepend">
    <span class="input-group-text">.00</span>
  </div>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>

  
</Form>
</div>
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