import React from 'react';

class SongPlayer extends React.Component {
  componentDidMount() {
    // change clientId to your own client id
    this.clientId = 'c3a6a7d9251cca666d47267c16038fa1';
    this.refs.audio.addEventListener('playing', this.props.onPlay);
    this.refs.audio.addEventListener('pause', this.props.onPause);
    this.refs.audio.addEventListener('ended', this.props.onEnded);
  }

  render() {
    // convenient way of passing audio url using SoundCloud API to <audio>
    // element
    const audioUrl = this.props.currSong.trackUrl + `?client_id=${this.clientId}`;
    return (
      <div className="song-player">
        <img src={this.props.currSong.thumbnailUrl}></img>
        <p className="currently-playing">
          {this.props.currSong.artist}  {this.props.currSong.songName}
        </p>
        <audio src={audioUrl}
          ref="audio"
          controls
          autoPlay="true"
          />
      </div>
    )
  }
}

export default SongPlayer;
