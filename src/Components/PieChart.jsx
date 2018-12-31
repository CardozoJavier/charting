import React, { Component } from 'react';
import {PieChart, Pie, Sector, Cell} from 'recharts';

import Paper from './Paper';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g style={{ 'height':'400px', 'width':'400px' }}>
      <text style= {{ 'color':'#000' }} x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const renderActiveShapeColor = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, percent, name } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g style={{ 'height':'400px', 'width':'400px' }}>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}></text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{ name }</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default	class TwoLevelPieChart extends Component{
		constructor(props){
			super(props);
      this.state= {
				activeIndex: 0,
				activeIndexColor: 0,
				title: {
					'0' : 'Plazos fijos',
					'1' : 'Letras del tesoro',
					'2' : 'Obligaciones negociables',	
					'3' : 'Letras del banco central',
				},
				paragraph: {
					'0' : 'Los plazos fijos ofrecen un retorno anual del 45%, con condiciones expresas al momento de la contratación',
					'1' : 'Las LETES emitidas por el tesoro nacional rinden 5% anual en moneda extranjera, con baja volatilidad',
					'2' : 'Las obligaciones negociables son bonos de instituciones privadas que rinden alrededor de 28% anual',	
					'3' : 'Las LEBAC emitidas por el banco central tienen un rendimiento anual en torno al 57%.',
				},
				color: {
					'0': '#81BEF7', 
					'1': '#2E9AFE', 
					'2': '#0080FF',
					'3': '#A9D0F5', 
				}
			}
			this.onPieEnter= this.onPieEnter.bind(this);
			this.onPieEnterColor= this.onPieEnterColor.bind(this);
		}
  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  onPieEnterColor(data, index) {
    this.setState({
      activeIndexColor: index,
    });
  }
	render () {
	const data = [
		{name: 'Group A', value: 1400}, 
		{name: 'Group B', value: 300},
		{name: 'Group C', value: 600}, 
		{name: 'Group D', value: 200}
	];
	const data02 = [
		{name: 'Plazo fijo', value: 2400}, 
		{name: 'LETES', value: 4567},
		{name: 'Obligaciones negociables', value: 7800},
		{name: 'LEBAC', value: 1700}, 

	];
  	return (
			<div id='pieChart'>
				<PieChart width={1000} height={400}>
					<Pie 
						activeIndex={this.state.activeIndex}
						activeShape={renderActiveShape} 
						data={data} 
						cx={740} 
						cy={200} 
						innerRadius={90}
						outerRadius={120} 
						fill="#A9BCF5"
						onMouseEnter={this.onPieEnter}
					/>
				<Pie
						activeIndex={this.state.activeIndexColor}
						activeShape={renderActiveShapeColor} 
						data={data02} 
						cx={280} 
						cy={200} 
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={120} 
						fill="#8884d8"
						onMouseEnter={this.onPieEnterColor}
					>
						{
							data02.map((entry, index) => <Cell key={ index } fill={COLORS[index % COLORS.length]}/>)
						}
					</Pie>
				</PieChart>
				<Paper 
					title= { this.state.title[this.state.activeIndexColor] } 
					paragraph={ this.state.paragraph[this.state.activeIndexColor] } 
					color= { this.state.color[this.state.activeIndexColor] }
				/>
			</div>
    );
  }
}
const COLORS = ['#81BEF7', '#2E9AFE', '#0080FF', '#A9D0F5'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

