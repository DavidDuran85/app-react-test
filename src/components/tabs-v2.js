import React from 'react'

const Tabs = ({
    tabs,
    currentTab,
    handleChangeTab
}) => {
    let tab = tabs.find(tab => tab.id === currentTab)
    let content = <div>
        Contenido no disponible
    </div>
    if( tab && tab.content){
        content = tab.content
    }
    return(
        <React.Fragment>
            <div className="tabs is-boxed">
                <ul>
                    {
                        tabs.map( tab => 
                        <li 
                            onClick={() => handleChangeTab(tab)}
                            key={tab.id}
                            className={tab.id === currentTab ? 'is-active' : ''}>
                            <a>
                            <span>{tab.label}</span>
                            </a>
                        </li>)
                    }
                </ul>
            </div>
            {
                content
            }
        </React.Fragment>
    )
}

export default Tabs