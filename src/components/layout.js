import React, { Component } from 'react';
import Nabvar from '../components/navbar';
import { ToastContainer } from 'react-toastify';

class Layout extends Component{
    render(){
        return ( <div>
            <ToastContainer />
            <Nabvar />
            
            <div className="container container-main">
            {
                this.props.children  
            }
            </div>
            
        </div>)
    }
}

export default Layout