import React, { Component } from 'react';
import Nabvar from '../components/navbar';
import { ToastContainer } from 'react-toastify';

class Layout extends Component{
    render(){
        return ( <div>
            <ToastContainer />
            <Nabvar />
            {
                this.props.children  
            }
        </div>)
    }
}

export default Layout