import React, {Component} from 'react';
import Table from '../components/table';
import api from '../config/api';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinnerSpinki from 'react-spinkit' ;
import LoadingBar  from 'react-top-loading-bar' ;

class TablePage extends Component{
    state = {
        users: [],
        loadingBarProgress:0
    }

    componentDidMount = async () =>{
        await this.loadUsers()
    }
    loadUsers = async () => {
        let { data } = await api.get('/users')
        this.setState({
            users: data
        })
        
        //console.log('data',data)
    }

    handleDelete = (user) => {
        let {
            users
        } = this.state
        let index = users.findIndex( l => user.id === l.id)
        users.splice(index, 1)
        this.setState({
            loadingBarProgress:70
        })

        setTimeout(() => {
            this.setState({
                users: users,
                loadingBarProgress:100
            })
            toast.success("Success Notification !", {
                position: toast.POSITION.BOTTOM_RIGHT
              });
        }, 500)

        
    }
    onLoaderFinished = () => {
        this.setState({
            loadingBarProgress :0
        })
    }
    render(){
        let{
            users,
            loadingBarProgress
        }= this.state
        return ( <div>
            <LoadingBar 
            progress={loadingBarProgress}
            height={8}
            color="blue"
            onLoaderFinished={this.onLoaderFinished}/>
            <Table 
                config= {
                    {
                        title: 'Usuarios',
                        columns: [
                            { name: 'id', title: 'ID' },
                            { name: 'name', title: 'Nombre' },
                            { 
                                name: 'username', 
                                title: 'Nombre de Usuario',
                                
                            },
                            {
                                name:'actions',
                                title: 'Acciones',
                                formatter: (element) => {
                                    return (
                                        <div className="buttons">
                                        <button 
                                            onClick={ () => this.handleDelete(element)}
                                            className="button is-danger">
                                                Eliminar
                                            </button>
                                            <Link className="button is-link" to={`/tabs/${element.id}/${element.name}`}>
                                            Ver detalle
                                            </Link>
                                        </div>
                                    )
                                }
                            }
                            
                        ]
                    }
                }
                data={ users
                //     [ { id: 1, name: 'Alan', firstname: 'Mendoza', lastname: 'Rosales' },
                //      { id: 2, name: 'Juan', firstname: 'Jimenez', lastname: 'Cantu' }
                // ]
            }
                />
        </div>)
    }
}

export default TablePage;