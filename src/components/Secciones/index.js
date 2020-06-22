import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Col,Row, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { createPolicy } from '../../components/Action/index'
import { departments } from '../reducers/index'



const Secciones=(props)=>{


        
            {
            
                return(
                    <Container>
                        <Row>
                        
                            <Col>Nombre: {props.policies}
                            
                     
                            </Col>
                            <Col>
                            Monto:{props.bank}
                            </Col>
                            <Col>
                            Claim:{props.claimHistory}
                            </Col>
                        </Row>
                  
                    </Container>
                 
                )
            
            }
            
}

    const mapStateToProps=(state)=>{
        console.log(state)
        return{
          
          policies: state.policies,
          bank: state.bank,
          claimHistory : state.claimHistory
      
        }
      }
    
      export default connect(mapStateToProps, {departments})(Secciones)