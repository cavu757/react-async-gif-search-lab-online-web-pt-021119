import React, {Component} from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  state = {
    gifs : []
  }

  componentDidMount(){
    this.fetchGIFs()
    console.log(this.state.gifs.length)
  }

  render(){
    return(
      <div className='container-fluid'>
      <div className='row'>
      <div className='col-3'>
      </div>
      <GifSearch fetchGIFs={this.fetchGIFs}/>
      <GifList gifs={this.state.gifs}/>
      </div>
      </div>
    )
  }

  fetchGIFs = (query= "dolphins") => {
    let giphyKEY = process.env.REACT_APP_GIPHY_KEY
    let giphyURL = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyKEY}&limit=10&rating=g`
    fetch(giphyURL)
    .then(results => results.json())
    .then(({data}) => {
      this.setState({
      gifs: data.map(gif => ({url: gif.images.original.url}))
      })
    })

  }
}

export default GifListContainer
