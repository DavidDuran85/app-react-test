import React, {Component} from 'react';
import Table from '../components/table';
import api from '../config/api';

class TablePage extends Component{
    state = {
        users: []
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
            users: users
        })
    }
    render(){
        let{
            users
        }= this.state
        return ( <div>
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
                                // formatter: ({username, email}) =>{
                                //     return <span className="tag is-success">
                                //     {
                                //         `${username} ${email}`        
                                //     }
                                //     </span>
                                // }
                            },
                            {
                                name:'actions',
                                title: 'Acciones',
                                formatter: (element) => {
                                    return <button 
                                    onClick={ () => this.handleDelete(element)}
                                    className="button is-danger">
                                        Eliminar
                                    </button>
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