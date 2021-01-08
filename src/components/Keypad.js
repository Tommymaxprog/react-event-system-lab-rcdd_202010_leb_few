// Code Keypad Component Here
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> eb2d590eb6d061cf86b644a37b2a6b6fd5aef2c7
export default class Keypad extends React.Component {

  handleInput = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInput} 
        />
      </div>
    )
  }
}

