'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class SearchForm extends React.Component {


	render() {
		return ( 
      		<div className="searchform"> 
      			<form id="searchform" onSubmit={this.props.submitHandler}>
        			<input type="text" refs="search" className="searchbar" />
        			<input type="submit" className="submit" />
      			</form>
      		</div>
		) 
	}
}

export default SearchForm;