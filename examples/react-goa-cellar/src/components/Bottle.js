import React, {Component, PropTypes} from 'react';

class Bottle extends Component{
	constructor(props){
		super(props);
	}
  
	static propTypes = {
		bottle: PropTypes.object.isRequired
	};
	
	render() {
		const {bottle} = this.props;

		return (
			<tr>
				<td>{bottle.id}</td>
				<td>{bottle.account.id}</td>
				<td>{bottle.name}</td>
				<td>{bottle.varietal}</td>
				<td>{bottle.vineyard}</td>
				<td>{bottle.vintage}</td>
			</tr>
		)
	}
}

export default Bottle;
