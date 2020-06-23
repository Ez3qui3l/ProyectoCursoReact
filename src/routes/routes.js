import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import poliza from '../components/Pages/poliza'
import Layout from  '../components/Layout'
import seccionpoliza from '../components/Pages/seccionpoliza'
import reclamos from '../components/Pages/reclamos'
import seccionreclamos from '../components/Pages/seccionreclamos'
import principal from '../components/Pages/principal'
import seccionmonto from '../components/Pages/seccionmonto'
const browserHistory = createBrowserHistory()

const Routes =()=>{
    
    return(
        <Router history={browserHistory}>
        
            <Layout>
            <Switch>
            <Route exact path="/principal" component={principal}/>
            <Route path="/poliza" component={poliza}/>
            <Route path="/seccionP" component={seccionpoliza}/>
            <Route path="/reclamos" component={reclamos}/>
            <Route path="/reclamosseccion" component={seccionreclamos}/>
            <Route path="/montototal" component={seccionmonto}/>


       
            
                    
                    </Switch>
            </Layout>
        
        </Router>
    )
    
}
export default Routes