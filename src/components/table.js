import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Table extends Component {
    render(){
        let{
            config: { columns, title },
            data
        }= this.props

        console.log('columns', data)
        return (
            <div className="card">
                <div className="card-header">
                    <p className="card-header-title">
                       {title }
                    </p>
                </div>
                <div className="card-content is-fullwidth">
                <table className="table">
                    <thead>
                        <tr>
                            {
                                columns.map( column => (
                                    <th key={column.name}>
                                        { column.title
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 ? (
                                data.map( element => {
                                    return (
                                        <tr key={element.id}>
                                            {
                                                columns.map( column => <td key={column.name}>
                                                {
                                                    column.formatter ? column.formatter(element) : element[column.name] || 'N/A'
                                                    //element[column.name]
                                                }
                                                </td>)
                                            }
                                        </tr>
                                    )
                                })
                            ) : <tr>
                                    <td>
                                    No hay registros
                                    </td>
                                </tr>
                            
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

Table.propTypes = {
    data: PropTypes.array,
    config: PropTypes.object
}

Table.defaultProps = {
    data: [],
    config: {
        columns:[],
        title:'Listado'
    }
}

export default Table;