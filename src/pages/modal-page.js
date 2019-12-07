import React, { Component, Fragment } from 'react';
import Modal from '../components/modal';

class ModalPage extends Component{
    state = {
        classNameModal:'',
        title:'DDV'
    }
    showModal= () => {
        this.setState({
            classNameModal: 'is-active'
        })
    }
    hideModal= () => {
        this.setState({
            classNameModal: ''
        })
    }
    render(){
        let{
            classNameModal,
            title
        } = this.state
       return (
            <div>
                <button 
                onClick={this.showModal}
                className="button is-success">
                    Mostrar
                </button>
                {/* <button 
                onClick={this.hideModal}
                className="button is-success">
                    Ocultar
                </button> */}
                <Modal 
                    onClose={this.hideModal}
                    className={classNameModal}
                    title={title}
                    buttonsFooter={
                       <Fragment>
                        <a className="button is-success" onClick={this.hideModal} >Save</a>
                        <a className="button is-danger" onClick={this.hideModal} >Cancel</a>
                       </Fragment>
                    }
                    >
                    <div>
                        <h1 className="title is-1">
                            Componente Modal
                        </h1>
                    </div>
                    
                </Modal>
            </div>
            )
    }
}

export default ModalPage;