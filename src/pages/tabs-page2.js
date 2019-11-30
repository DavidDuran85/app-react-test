import React, { Component, Fragment } from 'react'
import Tabs from '../components/tabs'
import TabsV2 from '../components/tabs-v2'

class TabsPagev2 extends Component{
    state={
        currentTab: 'introduccion'
    }
    handleChangeTab = ({ id }) => {
        this.setState({
            currentTab:id
        })
    }
    render(){
        let {
            currentTab
        } = this.state
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
                <Tabs 
                    tabs={tabs}/>
                <hr />
                <TabsV2 
                    handleChangeTab = {this.handleChangeTab}
                    currentTab={currentTab}
                    tabs={tabs}/>
            </div>
            
        )
    }
}

export default TabsPagev2