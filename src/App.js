import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
 

class App extends React.Component {
	constructor(){
        super();
		this.state={
             robots: robots,
 	         searchfield:''
		}
	}
	
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
	const filteredRobots= this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	
	}
	
	render(){
		return(
		<div className='tc'>
		<h1>RoBoFrIeNdS</h1>
		<SearchBox searchChange={this.onSearchChange}  />
		 <CardList robots={this.state.robots}/>
		</div>
		);
	}
	
}
export default App;