import React, { Component } from 'react';
import './App.css';
import classnames from 'classnames'

class App extends Component {
  constructor(){
    super()
    this.state={
      showDrawer: false
    }
  }
  render() {
    return (
      <div>
        <nav className='main-nav'>
          <div className='logo'>Start Bootstrap</div>
          <div className='links'></div>
          <div className='phone'><button onClick={()=>this.setState({showDrawer: !this.state.showDrawer})}>Menu ☰</button></div>
          <div className='desktop'>
            <div>Services<br/></div>
            <div>Portfolio<br/></div>
            <div>About <br/></div>
            <div>Team <br/></div>
            <div>Contact <br/></div>
          </div>
        </nav>
          <div className={classnames('drawer', { open: this.state.showDrawer })}>
          <div>Services<br/></div>
              <div>Portfolio<br/></div>
              <div>About <br/></div>
              <div>Team <br/></div>
              <div>Contact <br/></div>
          </div>
            <body>
            </body>
      </div>

    );
  }
}

export default App;
