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
			items: [],
			currentPhoto: null
		}
		console.log('constructor')
	}
	static getDerivedStateFromProps= () => {
		console.log('getDerivedStateFromProps')
		return null
	}
    componentDidMount = async () =>{
		console.log('componentDidMount')
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
	handleClick = (data) =>{
		console.log(data)
		this.setState({
			currentPhoto: data
		})
	}


    render(){
		console.log('render')
        //destructuring
		const { photos, currentPhoto }= this.state
		
		const content = currentPhoto ? (<PhotosDetail data={currentPhoto}/>) : (<h1 className="title is-l">No selecciono foto</h1>)
        //const photos = this.state.photos
        return (
		<div>
			{
				content
			}
			<div className="columns is-multiline">
			{
				photos.map(photos => 
				(
					<div className="column is-6" key={photos.id}>
						<PhotosDetail  
						onClick={this.handleClick}
						data={photos} />
					</div>)
				)
			}
			</div>
		</div>)
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