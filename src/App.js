import React, { Component} from 'react';

import './App.css';
import {
  BrowserRouter as Router, //Enrutador
  Switch, //navegacion entre rutas
  Route, //ruta
  Link //componente h-ref permite navegar entre paginas
} from 'react-router-dom';

// pages
import Layout from './components/layout';

import TablePage from './pages/table-page';
import ModalPage from './pages/modal-page';
import Modal_Page from './pages/modal_page';
import TabPage from './pages/tab-page';
import TabsPagev2 from './pages/tabs-page2';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component{
  render () {
    return (
    <div className="container">
    <Router>
        
      {/* <nav className="navbar">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Tabla
            </Link>
            <Link to="/modal"  className="navbar-item">
              Modal
            </Link>
            <Link to="/tabs"  className="navbar-item">
              Tabs
            </Link>
          </div>
          </nav> */}
         
        
      
      <Layout>
        <Switch>
          <Route path="/" exact>
            <TablePage />
          </Route>
          <Route 
            path="/modal" exact
            component={ModalPage}
          />
          <Route 
            path="/tabs/:id/:name" 
            component={TabsPagev2}
          />
        </Switch>
      </Layout>
    </Router>
    </div>
   )
  }
}


export default App;
