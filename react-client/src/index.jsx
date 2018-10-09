import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Dropzone from './components/Dropzone.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }

  }

  componentDidMount() {
    // $.ajax({
    //   url: '/items', 
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });

  }

  render () {
    return (<div>
      <h1>mp3 Speed Mod</h1>
      <Dropzone />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));