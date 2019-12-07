import React, { Component, Fragment } from 'react'
import Tabs from '../components/tabs'

class TabsPage extends Component{
    render(){
        let tabs =[
            {
                id:'introduccion',
                label: 'Introdución',
                content: <div>
                    Texto de introduccion
                </div>
            },
            {
                id:'profile',
                label: 'Perfil',
                content: <div>
                    Perfil de Usuario
                </div>
            },
        ]
        return(
            <div>
                <Tabs tabs={tabs} />
            </div>
        )
    }
}

export default TabsPage