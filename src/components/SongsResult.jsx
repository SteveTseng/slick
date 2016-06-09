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
<<<<<<< HEAD
			<div className="singleSongResult">
					<span className="songResults"> {this.props.data} </span>
					<button onClick={this.songHandler} className="addSongToPlaylistBtn">add</button>
			</div>
=======
		<span>
				<div>
					<button onClick={this.songHandler}>Add</button>
						{this.props.data}
				</div>
		</span>
>>>>>>> a569075c86d09a1327c7a216a66c074fe6cff752
		)
	}
}

export default SongsResult;