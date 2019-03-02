import React, { Component } from 'react'

class SearchBar extends Component {

    state = {
        searchWord: ''
    }



    handleSubmit = (event) => {
        event.preventDefault()

        this.props.onSubmit(this.state.searchWord)

    }
    

  render() {
    return (
      <div className= "ui segment">
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
            <label className="">Image Search</label>
            <input 
            type="text"
            value={this.state.searchWord}
            onChange={(e) => this.setState({searchWord: e.target.value})}
            />
            </div>
          </form>
      </div>
    )
  }
}

export default SearchBar
