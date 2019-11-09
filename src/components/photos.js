//import de React & Component
import React, {Component} from 'react';
import axios from 'axios';
import PhotosDetail from './photos-detail'

const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})


class Photos extends Component{
    constructor(props){
        super(props)
        this.state= {
            photos: [],
            user: null,
            items: []
        }
    }
    componentDidMount = async () =>{
        try{
            const body= await instance.get('/photos?_page=2&_limit=10');
            //console.log('data =>',body.data)
            this.setState({
                photos: body.data || []
            })
        }catch(error){
            console.log('Error => ', error)
        }
        
    }
    render(){
        //destructuring
        const { photos }= this.state
        //const photos = this.state.photos
        return <div className="columns is-multiline">
            {
                photos.map(photos => 
                (
                    <div className="column is-6" key={photos.id}>
                        <PhotosDetail  data={photos} />
                    </div>)
                )
            }
        </div>
        /*
        return <div>
            Componente de Photos
            {
                this.props.children
            }
        </div> */
    }
}

export default Photos