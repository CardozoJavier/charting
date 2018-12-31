import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux'
import { createHashHistory } from 'history'

import Chart from './Chart';
import PieChart from './PieChart';
import Reports from './Reports';

import { soloTest } from '../store/actions/userActions.js';

class DisabledTabs extends React.Component {
  constructor(props){
		super(props)
		this.state = {
			value: 0,
		};
		this.handleClick= this.handleClick.bind(this);
	}
	history = createHashHistory()
  handleChange = (event, value) => {
    this.setState({ value });
  };
	handleClick= () => {
		var win = window.open('https://asset.bind.com.ar/images/documentos/IAM-performance.pdf', '_blank');
  	win.focus();
	}

  render() {
    return (
			<div style={{ 'maxWidth':'600px', 'margin':'80px 250px'}}>
				<Paper square>
					<Tabs
						value={this.state.value}
						indicatorColor="primary"
						textColor="primary"
						onChange={this.handleChange}
					>
						<Tab label="Rendimiento" />
						<Tab label="Composición de cartera" />
						<Tab label="Informes" />
					</Tabs>
				</Paper>
				{
					(this.state.value === 0 && <Chart />) || (this.state.value === 1 && <PieChart />) || (this.state.value === 2 && <Reports handleClick= { this.handleClick }/>)
				}
			</div>
    );
  }
}

const mapStateToProps= (state) => {
	return {}
}

const mapDispatchToProps= (dispatch) => {
	return {
		test : () => {
			return dispatch(soloTest())
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(DisabledTabs);