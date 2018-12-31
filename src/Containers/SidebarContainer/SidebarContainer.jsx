import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './style.css';

import Sidebar from '../../Components/Sidebar';

class SidebarContainer extends Component {
	constructor(props){
		super(props);
		this.state= {
			chart : false,
		}
		this.handleClick= this.handleClick.bind(this);
		this.defaultClick= this.defaultClick.bind(this);
	}
	defaultClick(){
		this.setState({
			chart : false
		});
	}
	handleClick(e){
		this.setState({
			chart : true
		});
	}
	render(){
		return(
			// <div style={{ 'height':'100%' }}>
			<div ClassName= { s.container } >
				<Sidebar chart= { this.state.chart } defaultClick= { this.defaultClick } handleClick= { this.handleClick }/>
			</div>
		)
	}
}

const mapStateToProps= (state) => {
	return {

	}
}

const mapDispatchToProps= (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);