import React, {Component} from 'react';

import {Link} from 'react-router';
import {connect} from 'react-redux';

@connect(state => ({routerState: state.router}))
class NavBar extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<nav className='navbar navbar-inverse navbar-static-top'>
				<div className='container-fluid'>
					<div className='navbar-header'>
						<Link className='navbar-brand' to='/'>Goa Cellar</Link>
					</div>
					<div id='navbar'>
						<ul className='nav navbar-nav'>
							<li><Link to='/bottles'>Bottles</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default NavBar;
