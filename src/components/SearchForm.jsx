'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class SearchForm extends React.Component {

	render() {
		return ( 
      		<div> 
      			<form id="searchform" onSubmit={this.props.submitHandler} >
        			<input type="text" refs="search" className="searchbar" onChange={this.props.updateSearchText}
                placeholder="search"/>
      			</form>
      		</div>
		) 
	}
}

export default SearchForm;