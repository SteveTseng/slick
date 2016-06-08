import React from 'react';
import Songs from './Songs.jsx';

const styles = {
  searchBox: {
    border: '1px black solid',
    backgroundColor: 'white',
    width: '50%',
    height: '50%',
    left: '25%',
    top: '25%',
    display: 'block',
    position: 'absolute',
    padding: '10px',
  },
};

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      songList: [],
    };
  }

  componentDidMount() {
    const that = this;
    console.log('initializing SC');
    SC.initialize({
      client_id: 'c3a6a7d9251cca666d47267c16038fa1',
    });

    console.log('making the SC search query');
    // q is the general search query
    SC.get('/tracks', {
      q: 'panda',
    }).then( (tracks) => {
      console.log('back from the SC search query');
      console.log(tracks);
      const mappedTracks = tracks.map((track) => {
        return {
          artist: track.user.username,
          songName: track.title,
          thumbnailUrl: track.artwork_url,
          trackUrl: track.stream_url,
        };
      });

      console.log(mappedTracks);
      that.setState({
        songList: mappedTracks,
      });
    });
  }
  render() {
    console.log('rendering!');
    console.log(this.state.songList);
    const songList = this.state.songList;
    let songComponents = songList.map( (track, i) => {
      return (
        <Songs
        key = {i}
        artist={track.artist}
        songName = {track.songName}
        thumbnailUrl = {track.thumbnailUrl || 'http://3.bp.blogspot.com/-PzpJFD56NmM/U4OEGvGR5pI/AAAAAAAAIO8/s9UBNaw800A/s1600/soundcloud.png'}
        />);
    });
    console.log('and now for the components');
    console.log(songComponents);

    return (
      <div className="searchBox" style={styles.searchBox}>
        {songComponents}
      </div>
    );
  }
}

export default SearchBox;
