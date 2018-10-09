import React from 'react';

class Dropzone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dragover: false,
      audio: 'https://s3-us-west-1.amazonaws.com/streamboard98/music/RickAstley_NeverGonnaGiveYouUp.mp3',
      play: false,

    }
  }

  dropzoneDragOver (event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState({dragover: true})
    return false
  }

  handleDrop (event) {
    event.preventDefault();

    var reader = new FileReader();
      reader.onload=function(e){
        document.getElementById('audioPlayer').src = e.target.result
      };
      reader.readAsDataURL(event.dataTransfer.files[0]);

    document.getElementById('dropzone').innerHTML = `Currently playing: ${event.dataTransfer.files[0].name}`

  }

  dragLeave (event) {
    event.stopPropagation();
    event.preventDefault();
    this.setState({dragover: false})
  }

  playHandler(){
    if (this.state.play === false) {
      this.state.audio.play()
      this.state.play = true
    } else {
      this.state.audio.pause()
      this.state.play = false
    }
  }

  playbackRateChange(event) {
    this.setState({ playbackRate:  event.target.value / 100})
    console.log(this.state.playbackRate)
  }

  submitPlaybackRate(){
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.playbackRate = this.state.playbackRate

  }

  render() {
    return (
      <div>    
        <div id="dropzone" className={this.state.dragover ? 'dragover' : 'dropzone'}
        onDragLeave={ (event) => { this.dragLeave(event) } }
        onDrop={ (event) => { this.handleDrop(event) } }
        onDragOver={ (event) => { this.dropzoneDragOver(event) }
      }> Drop mp3's here!</div>
        <audio id='audioPlayer' src={this.state.audio} controls> </audio>

        <div id='playbackContainer'>
        <input id='playbackInput' placeholder='10% - 1500% of tempo' type='text' onChange={ (event) => {
          this.playbackRateChange(event);
        }} /> <span id='percent'>%</span>
        <button onClick={(event) => {
          this.submitPlaybackRate(event)
        }}>Set Playback Rate</button>
        </div>
      </div>
    )
  }
}

export default Dropzone;


