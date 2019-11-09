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
			//search: '',
			formData: {
				search:'',
				name:'',
				option:'',
				acceptConditions: false,
				answer: ''
			}
		}
	}
	componentDidMount = async () =>{
		this.loadElements()
	}
	loadElements = async () => {
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
	cleanElements = async () =>{
		this.setState({
			photos:  []
		})
	}
	onInputChange = (event) =>{
		console.log('event', event.target.checked)
		let{
			formData
		}=this.state

		console.log(event.target.name)
		let{
			target
		}=event

		formData[target.name] = target.type === 'checkbox' ? target.checked : target.value

		this.setState({
			formData
		})
	}

	render(){
		//destructuring
		const { photos, formData }= this.state
		//const photos = this.state.photos
		return (<div>
			<div className="columns">
				<div className="column">
					<button onClick={this.cleanElements} className="button is-danger">
					Limpiar registros
					</button>
				</div>
				<div className="column">
					<button onClick={this.loadElements} className="button is-link">
					Cargar registros
					</button>
				</div>
				<div className="column">
					<input name="search" className="input" value={formData.search} onChange={this.onInputChange} />
					{/* { formData.search } */}
				</div>
				<div className="column">
					<input name="name" className="input" value={formData.name} onChange={this.onInputChange} />
					{/* { formData.name } */}
				</div>
				<div className="column">
					<div className="select is-rounded is-small is-focused is-link">
					<select name="option"  onChange={this.onInputChange}>
						{
							photos.map((photo, index) =>{
							return(<option key={photo.id} value={photo.id}>
							{
								`${index + 1}.- ${photo.title}`
							}
							</option>)
							})
						}
						<option>Selecciona una opcion</option>
						<option>Otra opcion</option>
					</select>
					
					
					</div>
					{
						JSON.stringify(formData, null,2 )
					}	
				</div>
				<div className="column">
					<input onChange={this.onInputChange} value={formData.acceptConditions} 
					checked={formData.acceptConditions} type="checkbox" name="acceptConditions">
					</input>
				</div>
				<div className="column">
					<div className="control">
						<label className="radio">
							<input onChange={this.onInputChange} value="yes" 
							checked={formData.answer === "yes"} type="radio" name="answer"/>
							Yes
						</label>
						<label className="radio">
							<input onChange={this.onInputChange} value="no" 
							checked={formData.answer === "no"} type="radio" name="answer"/>
							No
						</label>
					</div>
					
				</div>
			</div>
			
			{/* <div className="columns is-multiline">
			{
				photos.map(photos => 
				(
					<div className="column is-6" key={photos.id}>
						<PhotosDetail  data={photos} />
					</div>)
				)
			}
			</div> */}
		</div>
		
		)
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