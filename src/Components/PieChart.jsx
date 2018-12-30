import React, { Component } from 'react';
import {PieChart, Pie, Sector, Cell} from 'recharts';

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
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
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
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
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
		{name: 'Group A', value: 400}, 
		{name: 'Group B', value: 300},
		{name: 'Group C', value: 300}, 
		{name: 'Group D', value: 200}
	];
	const data02 = [
		{name: 'Group A', value: 2400}, 
		{name: 'Group B', value: 4567},
		{name: 'Group C', value: 2398}, 
		{name: 'Group D', value: 7800},

	];
  	return (
			<div id='pieChart'>
				<PieChart width={1000} height={400}>
					<Pie 
						activeIndex={this.state.activeIndex}
						activeShape={renderActiveShape} 
						data={data} 
						cx={720} 
						cy={200} 
						innerRadius={90}
						outerRadius={120} 
						fill="#8884d8"
						onMouseEnter={this.onPieEnter}
					/>
				<Pie
						activeIndex={this.state.activeIndexColor}
						activeShape={renderActiveShapeColor} 
						data={data02} 
						cx={300} 
						cy={200} 
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={120} 
						fill="#8884d8"
						onMouseEnter={this.onPieEnterColor}
					>
						{
							data02.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
						}
					</Pie>
					{/* <Pie 
						activeIndex={this.state.activeIndex}
						activeShape={renderActiveShape} 
						data={data02} 
						cx={100} 
						cy={200} 
						innerRadius={60}
						outerRadius={80} 
						fill="#8884d8"
						onMouseEnter={this.onPieEnter}
					/> */}
				</PieChart>
			</div>
    );
  }
}
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

