import React, {Component} from 'react'

class GifList extends Component {

  constructor(props){
    super(props);
    console.log(props)
  }


  render(){
    return(
      <div className='mt-2'>
        {this.props.gifs.map(gif => <img className="m-1" key={gif.url} src={gif.url} alt="gif" width="245px"/>)}
      </div>
    )
  }
}

export default GifList
