import React, { Component } from 'react';
import '../App.css';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
// import axios from 'axios'

import unsplash from '../api/unsplash'

class App extends Component {

    state = {
      images: []
    }


  handleSubmit = async (searchWord) => {

    console.log(searchWord)
     const response = await unsplash.get('/search/photos',{
      params:  {query: searchWord},
     
    })

    // console.log(response)
    console.log(response.data.results)

    this.setState({images: response.data.results})
    // console.log(this.state.images )

}

  render() {
    return (
      <div className="ui container" style={{marginTop: '15px'}}>

      <SearchBar onSubmit={this.handleSubmit}/>
      <ImageList images={this.state.images}/>

      </div>
    );
  }
}

export default App;
