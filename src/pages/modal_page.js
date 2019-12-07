import React, { Component } from 'react';
import api from '../config/api';
import ModalDDV from '../components/modal-ddv';

class Modal_Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            posts: [],
            tipo: '',
            titulo: '',
            mensaje: '',
            modalState: false
        }
        //this.toggleModal = this.toggleModal.bind(this);
    }
    
    componentDidMount = async () => {
        await this.loadUsers()
        await this.loadPost()
    }   
    loadUsers = async () => {
        let { data } = await api.get('/users?id=1')
        this.setState({
            users : data
        })
    }
    loadPost = async () => {
        let { data } = await api.get('/posts?id=3')
        this.setState({
            posts : data
        })
        
    }
    toggleModal= (tipoDato) => {    
        let {
            tipo,
            users,
            posts
        } = this.state
        if (tipoDato === 'usuario') {
            console.log(users[0].name) 
            this.setState({
                titulo: users[0].name + ' '+ users[0].phone, 
                mensaje: users[0].name+' - '+users[0].email
            })
            console.log(this.state.titulo) 
        } else {
            console.log('post') 
            this.setState({
                titulo: posts[0].title,
                mensaje: posts[0].body
            })
        }
        this.setState((prev, props) => {
        const newState = !prev.modalState;
        
        return { modalState: newState };
        });
    }
    
    render(){
        let{
            users,
            posts
        }= this.state
        return (
            <div className='container'>
                <a className='button is-danger' onClick={ () => this.toggleModal('usuario')}>
                    <strong>Usuarios</strong>
                </a>
                <a className='button is-link' onClick={() => this.toggleModal('post')}>
                    <strong>Post</strong>
                </a>
                <ModalDDV 
                    closeModal={this.toggleModal} 
                    modalState={this.state.modalState} 
                    title={this.state.titulo}>
                    <p>{this.state.mensaje}</p>
                </ModalDDV>
            </div>
            
            )
    }
}

export default Modal_Page;