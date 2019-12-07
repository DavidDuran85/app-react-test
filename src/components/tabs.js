import React, { Component } from 'react'

class Tabs extends Component{
    constructor(props){
        super(props)
        //let initialTab =this.props.tabs[0]
        let [initialTab] =this.props.tabs //obtener el primer elemento //Destructuring con arreglos

        this.state= {
            currentTab: initialTab.id
        }
    }
    handleChangeTab= ({ id }) => {
        this.setState({
            currentTab: id
        })
    }
    getContent = () => {
        let{
            currentTab
        }= this.state

        let {
            tabs
        }=this.props
        let tab = tabs.find( tab => tab.id === currentTab)
        if( tab && tab.content){
            return tab.content
        } else {
            return <div>
                Contenido no disponible
            </div>
        }
    }
    render(){
        let {
            tabs
        }= this.props
        let {
            currentTab
        }= this.state
        
        return(
            <div>
                <div className="tabs is-toggle is-centered">
                <ul>
                  {
                      tabs.map( tab => (
                          <li 
                            onClick={ () => this.handleChangeTab(tab) }
                            className={currentTab === tab.id ? 'is-active' : ''} 
                            key={tab.id}>
                              <a>
                                  <span>
                                      {
                                          tab.label
                                      }
                                  </span>
                              </a>
                          </li>
                      ))
                  }
                </ul>
                    </div>
                {
                      this.getContent()
                  }
            </div>
        );
    }
}

export default Tabs