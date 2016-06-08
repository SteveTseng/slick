'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SongsResult from './SongsResult.jsx';
import SearchForm from './SearchForm.jsx';


class SongSearchPopup extends React.Component {
	constructor(){
		super();
		this.state = {
			searchResults: [],
			searchText: ''
		}
		this.submitHandler = this.submitHandler.bind(this);
		this.updateSearchText = this.updateSearchText.bind(this);
		this.addSong = this.addSong.bind(this);
	}

	submitHandler(e) {
		//console.log(this.state.searchText)
		e.preventDefault();
		//console.log('initializing SC');
	    SC.initialize({
	      client_id: 'c3a6a7d9251cca666d47267c16038fa1',
	    });
	    //console.log('making the SC search query');
	    // q is the general search query
	    //console.log('input', e.target.value.onChange)
	    SC.get('/tracks', {
	      q: this.state.searchText,
	    }).then( (tracks) => {
	      //console.log('back from the SC search query');
	      //console.log(tracks);
	      const mappedTracks = tracks.map((track) => {
	        return {
	          artist: track.user.username,
	          songName: track.title,
	          thumbnailUrl: track.artwork_url,
	          trackUrl: track.stream_url,
	        };
	      });
	      this.setState({
	        searchResults: mappedTracks
	      });
	    });
	}
	addSong(index){
		return this.props.onClicky(this.state.searchResults[index]);
	}

	updateSearchText(e){
		this.setState({
			searchText: e.target.value
		})
	}

	render () {
		// console.log('searchpoprender',this.state)
		let songNodes = this.state.searchResults.map((song, index) => {
			return <SongsResult data={song.songName} key={index} clicked={this.addSong} index={index} />
		})
		return(
			<div>
				<SearchForm submitHandler={this.submitHandler} updateSearchText={this.updateSearchText}/>
				<ul className="searchResults">
					{songNodes}
				</ul>
			</div>
		)
	}
}

export default SongSearchPopup;
