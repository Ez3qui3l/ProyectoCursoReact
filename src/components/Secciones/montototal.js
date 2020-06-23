import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { departments } from '../reducers/index'



const MontoTotal=(props)=>{


        
            
            
                return(<Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    
                    <th>MontoTotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    
                    <td>{props.bank}</td>
                  </tr>
                 
                  
                  
                </tbody>
              </Table>
                    
                 
                )
            
            
            
}

    const mapStateToProps=(state)=>{
        console.log(state)
        return{
          
          policies: state.policies,
          bank: state.bank,
          claimHistory : state.claimHistory
      
        }
      }
    
      export default connect(mapStateToProps, {departments})(MontoTotal)