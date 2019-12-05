import React, {Component} from 'react'

class GifSearch extends Component {

  constructor(){
    super();

    this.state = {
      query : ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGIFs(this.state.query)
  }


  render(){
    return( 
      <div className='col-6'>
      <form className="form text-center" onSubmit={this.handleSubmit}>
        <div className="form-group mt-2">
        <input type="text" id='text' className="form-control" placeholder="Search GIF..." value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
        </div>
        <input type="submit" value="Search" className="btn btn-outline-primary" />
      </form>
      </div>
    )
  }
}

export default GifSearch
