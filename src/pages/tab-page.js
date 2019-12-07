import React, { Component, Fragment } from 'react'
import Tab from '../components/tab'
import api from '../config/api';

class TabPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }
    
    componentDidMount = async () => {
        await this.loadUsers()
    }   
    loadUsers = async () => {
        let { data } = await api.get('/users?_limit=6')
        this.setState({
            users : data
        })
    }
    primerRegistro(index){
        if( index === 0)
        return "is-active"
        else
        return ""
    }
    render(){
        let{
            users
        }= this.state
        return(
            <div>
                
                <Tab
                     Cabecera={
                              users.map( (users,index) => 
                              (
                                  <li className={this.primerRegistro(index)} key={index}>
                                      <a>{users.name}</a>
                                  </li>
                              ))
                       
                     }
                >
                </Tab>
            </div>
            

               
            
        )
    }
}

export default TabPage