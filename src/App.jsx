import React from 'react';
import Game from './Game.jsx';
import Timer from './Components/Timer/Timer.jsx';

class App extends React.Component {
  state = {
    timeLevel:null
  }
  render() {
    return (
      <>
        {/* You need to refresh in order to unMount the Timer , but I guess it will be like Elena's project , with a button that will clear the Interval, now if you want to test it you need to refresh the page */}
        {this.state.timeLevel&&<Timer timeLevel={this.state.timeLevel}/>}
        <Game setTime={(time)=>this.setState({timeLevel:time})}/>
      </>
    );
  }
}

export default App;