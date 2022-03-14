import React from 'react'

//Styles
import './style.css'

//Images
import SearchIcon from './search-icon.svg'

const Search = () => (
  <div id="search-bar">
		<form name="search" method="GET">
			<div className="search-input-wrapper">
				<input type="search" name="search" value="" />
				<button type="submit"><img src={SearchIcon} alt="Search" /></button>
			</div>
		</form>
	</div>
)

export default Search