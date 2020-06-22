import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
//import Contact from './pages/contact'
//import About from './pages/about'
//import Layout from './components/Layout'
//import NotFoundPage from './pages/NotFoundPage'
import poliza from '../components/Pages/poliza'
import Layout from  '../components/Layout'
import seccionpoliza from '../components/Pages/seccionpoliza'
import reclamos from '../components/Pages/reclamos'
import seccionreclamos from '../components/Pages/seccionreclamos'

const browserHistory = createBrowserHistory()

const Routes =()=>{
    
    return(
        <Router history={browserHistory}>
        
            <Layout>
            <Switch>
            <Route exact path="/poliza" component={poliza}/>
            <Route path="/seccionP" component={seccionpoliza}/>
            <Route path="/reclamos" component={reclamos}/>
            <Route path="/reclamosseccion" component={seccionreclamos}/>

           {/* <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/NotFoundPage" component={NotFoundPage} />
    */}
            
                    
                    </Switch>
            </Layout>
        
        </Router>
    )
    
}
export default Routes