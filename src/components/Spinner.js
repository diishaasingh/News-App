import React, { Component } from 'react'
import loading from './spin.gif'

export default class Spinner extends Component {
  render() {

    const loadingStyle =  ({
    
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      
    
  })
    return (

      
      <div>
          <img style={loadingStyle} src={loading} alt="loading" />
      </div>
      //<iframe src="https://giphy.com/embed/sSgvbe1m3n93G" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/juan-gabriel-sSgvbe1m3n93G">via GIPHY</a></p>
    )
  }
}


