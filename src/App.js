import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Photos from './components/photos'
import PostApi from './components/api-post';

 class App extends Component{
  render(){
    return (
      <div className="container">
        <div className="section">
          <Photos />
          {/*<PostApi />*/}
        </div>
      </div>
      
        
    );
  }
}
 
//const App= () => (<div>Hola</div>)
//const App= () => (<Photos />)
export default App;
