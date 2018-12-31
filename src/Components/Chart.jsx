import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import s from '../Containers/SidebarContainer/style.css';
  

export default class Chart extends Component {
	constructor(props){
		super(props);
		this.state= {
			opacity : {
				'Desempeño del fondo' : 1,
				'Capital acumulado' : 1,
			},
			activeIndex : 0,
		}
		this.onPieEnter= this.onPieEnter.bind(this);
		this.handleMouseEnter= this.handleMouseEnter.bind(this);
		this.handleMouseLeave= this.handleMouseLeave.bind(this);

	}
  handleMouseEnter(o) {
    const { dataKey } = o;
    const { opacity } = this.state;
    
  	this.setState({
    	opacity: { ...opacity, [dataKey]: 0.5 },
    });
  }
  handleMouseLeave(o) {
  	const { dataKey } = o;
    const { opacity } = this.state;
    
  	this.setState({
    	opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

	render () {
		const data = [
					{name: '01/12', 'Desempeño del fondo': 0.18, 'Capital acumulado': 100, amt: 10},
					{name: '02/12', 'Desempeño del fondo': 0.36, 'Capital acumulado': 210, amt: 10},
					{name: '03/12', 'Desempeño del fondo': 0.60, 'Capital acumulado': 212, amt: 90},
					{name: '04/12', 'Desempeño del fondo': 0.78, 'Capital acumulado': 224, amt: 11},
					{name: '05/12', 'Desempeño del fondo': 0.90, 'Capital acumulado': 260, amt: 1},
					{name: '06/12', 'Desempeño del fondo': 1.1, 'Capital acumulado': 258, amt: 2},
					{name: '07/12', 'Desempeño del fondo': 1.25, 'Capital acumulado': 265, amt: 20},

					{name: '08/12', 'Desempeño del fondo': 1.50, 'Capital acumulado': 300, amt: 10},
					{name: '09/12', 'Desempeño del fondo': 1.80, 'Capital acumulado': 310, amt: 10},
					{name: '10/12', 'Desempeño del fondo': 2, 'Capital acumulado': 312, amt: 90},
					{name: '11/12', 'Desempeño del fondo': 2.16, 'Capital acumulado': 424, amt: 11},
					{name: '12/12', 'Desempeño del fondo': 2.3, 'Capital acumulado': 460, amt: 1},
					{name: '13/12', 'Desempeño del fondo': 2.45, 'Capital acumulado': 458, amt: 2},
					{name: '14/12', 'Desempeño del fondo': 2.65, 'Capital acumulado': 465, amt: 20},

					{name: '15/12', 'Desempeño del fondo': 2.86, 'Capital acumulado': 500, amt: 10},
					{name: '16/12', 'Desempeño del fondo': 3, 'Capital acumulado': 510, amt: 10},
					{name: '17/12', 'Desempeño del fondo': 3.18, 'Capital acumulado': 612, amt: 90},
					{name: '18/12', 'Desempeño del fondo': 3.48, 'Capital acumulado': 724, amt: 11},
					{name: '19/12', 'Desempeño del fondo': 3.66, 'Capital acumulado': 860, amt: 1},
					{name: '20/12', 'Desempeño del fondo': 3.71, 'Capital acumulado': 858, amt: 2},
					{name: '21/12', 'Desempeño del fondo': 3.90, 'Capital acumulado': 965, amt: 20},
		];
  	const { opacity } = this.state;
  	// const { handleClick } = this.props;
		return (
    	<div id='containerChart'>
				<h1 id='h1'>Rendimientos del fondo</h1>
        <LineChart width={800} height={400} data={data}>
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey="name"/>
         <YAxis yAxisId='left'/>
	       <YAxis yAxisId="right" orientation="right" />
         <Tooltip/>
         <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
         <Line yAxisId='left' type="monotone" dataKey="Capital acumulado" strokeOpacity={opacity['Capital acumulado']} stroke="#8884d8" activeDot={{r: 8}}/>
         <Line yAxisId='right' type="monotone" dataKey="Desempeño del fondo" strokeOpacity={opacity['Desempeño del fondo']} stroke="#82ca9d" />
        </LineChart> 
			</div>
		)
	}
}
