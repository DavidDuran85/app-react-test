import React, { Component } from 'react'
import axios from 'axios'
import PostApiDetail from './api-post-detail'

const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})

class PostApi extends Component{
    constructor(props){
        super(props)
        this.state={
            posts: [],
            user: [],
            items: []
        }
        this.colors=["dark","primary","link","info","success","warning","danger"]
        this.posicion= 0
    }
    
    componentDidMount = async()=> {
        try {
            const body= await instance.get('/posts') //?_page=1&_limit=2
            //console.log('data => ', body.data)
            this.setState({
                posts: body.data || []
            })
            const body_user= await instance.get('/users') //?_page=1&_limit=2
            //console.log('body_user => ', body_user.data)
            this.setState({
                user: body_user.data || []
            })
        } catch (error) {
            console.log("Error => ",error)
        }
    }
    Posicionamiento(){
        let valor=this.posicion
        //console.log("size : ",this.colors.length)
        if (valor >= this.colors.length -1) {
            valor=0
        } else {
            valor++
        }
        this.posicion = valor
        //console.log("valor : ",valor)
        return(this.colors[valor])
    }
    ObtenerUsuario(idUsuario){
        const { user } = this.state
        for (const [index, value] of user.entries()) {
            if (value.id === idUsuario) {
                //console.log("valor : ",value.name)
                return (value.name+" ("+value.email+")")
                
            }
            //console.log("valor : ",value.name)
        }
    }

    render (){
        //destructuring
        const { posts } = this.state
        return <div className="column is-multiline">
            {
                posts.map( posts =>(
                  <div className="column" key={posts.id}>
                    <PostApiDetail data={posts} color={this.Posicionamiento()} usuario={this.ObtenerUsuario(posts.userId)} />
                  </div> 
                ))
            }
        </div>
    }
}

export default PostApi