import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Chart from './Chart';
import PieChart from './PieChart';

class DisabledTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

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
						<Tab label="Historico" />
					</Tabs>
				</Paper>
				{
					this.state.value === 0 && <Chart /> || this.state.value === 1 && <PieChart />
				}
			</div>
    );
  }
}

export default DisabledTabs;