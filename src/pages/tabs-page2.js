import React, { Component, Fragment } from 'react'
import Tabs from '../components/tabs'
import TabsV2 from '../components/tabs-v2'
import api from '../config/api';

class TabsPagev2 extends Component{
    state={
        currentTab: 'introduccion',
        user : null
    }
    componentDidMount = async () => {
        //console.log('this.props', this.props.match.params)
        await this.load()
    }
    load = async () => {
        let{
            match: { params: { id } }
        } = this.props
        let {data} = await api.get(`/users/${id}`)
        this.setState({
            user:data
        })
    }
    handleChangeTab = ({ id }) => {
        this.setState({
            currentTab:id
        })
    }
    render(){
        let {
            currentTab,
            user
        } = this.state
        if(!user){
            return <div>
                CArgando
            </div>
        }
        let tabs =[
            {
                id:'introduccion',
                label: 'Datos Generales',
                content: <div>
                    Nombre 
                    {
                        user.name
                    }
                </div>
            },
            {
                id:'profile',
                label: 'Dirección',
                content: <div>
                   {
                        user.address.street
                    }
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