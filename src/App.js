import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  state = {
    users: {},
    active: false,
    first: true,
  }

  handleClick = () => {
    console.log('this is:', this);
    fetch('https://api.github.com/users/TimeApollo')
      .then( response => response.json())
      .then( info => {
        if (this.state.first){
          this.setState({users:info});
          this.setState({first:false});
        }
        this.state.active ? 
          this.setState({active:false}) :
          this.setState({active:true});
        console.log(this.state)
      })
  }

  render() {
    return (
      this.state.active ? 
        (<div className='ui inverted segment center aligned'>
          <button className='ui green inverted button' onClick={this.handleClick}>Toggle Me</button>
          <div className='ui container'>
            <img src={this.state.users.avatar_url}
                  alt={this.state.users.name}
                  className='ui medium circular image centered'
                  style={{'margin-top':'1.5em','margin-bottom':'1.5em'}}/>
            <div>{this.state.users.name}</div>
            <div>{this.state.users.login}</div>
            <div>{this.state.users.bio}</div>
            <a href={this.state.users.html_url}>Visit My Github Page</a>
          </div>
        </div>
        ) : 
        (<div className='ui inverted segment center aligned'>
          <button className='ui green inverted button' onClick={this.handleClick}>Toggle Me</button>
        </div>)
    );
  }
}

export default App;
