import React, { Component} from 'react';
import TablePage from './pages/table-page';
import ModalPage from './pages/modal-page';
import Modal_Page from './pages/modal_page';
import TabPage from './pages/tab-page';
import TabsPage from './pages/tabs-page';
import './App.css';
import {
  BrowserRouter as Router, //Enrutador
  Switch, //navegacion entre rutas
  Route, //ruta
  Link //componente h-ref permite navegar entre paginas
} from 'react-router-dom';

class App extends Component{
  state = {
    collapsed: false
  }
  handleMenu = () => {
    this.setState((prevState) => {
      return {
        collapsed : !prevState.collapsed
      }
    })
  }

  render () {
    let{
      collapsed
    } = this.state
    return (
    <div className="container">
    <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a role="button" 
          onClick={this.handleMenu}
          className="navbar-burger burger" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${collapsed ? 'is-active': ''}`}>
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

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
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
         
        
      
      <Switch>
        <Route path="/" exact>
          <TablePage />
        </Route>
        <Route 
          path="/modal" exact
          component={ModalPage}
        />
        <Route 
          path="/tabs" exact
          component={TabsPage}
        />
      </Switch>
    </Router>
    </div>
   )
  }
}


export default App;
