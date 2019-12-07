import React, { Component } from 'react'

const Tab = ({Cabecera}) => {
    return(
        <div className="tabs  is-toggle">
            <ul>
                {Cabecera}
            </ul>
        </div>
    )
}

export default Tab