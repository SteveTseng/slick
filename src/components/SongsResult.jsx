'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class SongsResult extends React.Component {
	constructor(){
		super();
		this.songHandler = this.songHandler.bind(this)
	}
	songHandler(){
		return this.props.clicked(
			this.props.index
			)
	} 
	render(){
		return(	
			<div className="singleSongResult">
					<span className="songResults"> {this.props.data} </span>
					<button onClick={this.songHandler} className="addSongToPlaylistBtn">add</button>
			</div>
		)
	}
}

export default SongsResult;