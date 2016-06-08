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
		<span>
				<div>
					<button onClick={this.songHandler}>Add</button>
						{this.props.data}
				</div>
		</span>
		)
	}
}

export default SongsResult;