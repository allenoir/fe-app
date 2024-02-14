import React, { PureComponent } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const barChartData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const lineChartData = [
  { name: 'Page A', uv: 1000 },
  { name: 'Page B', uv: 2000 },
  { name: 'Page C', uv: 900 },
  { name: 'Page D', uv: 4000 },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 3000 },
  { name: 'Page G', uv: 2000 },
];

const pieChartData = [
  { name: 'Balai Pertemuan', value: 400 },
  { name: 'Pasar Desa', value: 300 },
  { name: 'Sumur Desa', value: 300 },
  { name: 'Olahraga', value: 200 },
];

const radarChartData = [
  {
    subject: 'Dusun 1',
    A: 120,
    B: 20,
    fullMark: 150,
  },
  {
    subject: 'Dusun 2',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Dusun 3',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Dusun 4',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Dusun 5',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Dusun 6',
    A: 65,
    B: 85,
    fullMark: 150,
  },
  {
    subject: 'Dusun 7',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const customOrder = ['Dusun 7', 'Dusun 6', 'Dusun 5', 'Dusun 1'];
const sortedRadarChartData = [...radarChartData].sort((a, b) => customOrder.indexOf(a.subject) - customOrder.indexOf(b.subject));

class Charts extends PureComponent {
  render() {
    return (
      <main className='main-container'>
        <div className="chart-grid-container">
          <div className="chart-grid-item a">
            <LineChartContainer data={lineChartData} />
          </div>
          <div className="chart-grid-item b">
            <BarChartContainer2 data={barChartData} />
          </div>
          <div className="chart-grid-item c">
            <PieChartContainer data={pieChartData} />
          </div>
          <div className="chart-grid-item d">
            <RadarChartContainer data={sortedRadarChartData} />
          </div>
          <div className="chart-grid-item e">
            <PieChartContainer data={pieChartData} />
          </div>
          <div className="chart-grid-item f">
            <PieChartContainer data={pieChartData} />
          </div>
          <div className="chart-grid-item g">
            <BarChartContainer data={barChartData} />
          </div>
        </div>
      </main>
    );
  }
}

const LineChartContainer = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      {/* Your Line Chart components */}
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line connectNulls type="monotone" dataKey="uv" stroke="#2161D5" fill="#2161D5" />
    </LineChart>
  </ResponsiveContainer>
);

const BarChartContainer = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      {/* Your Bar Chart components */}
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#2161D5"/>
      <Bar dataKey="uv" fill="#97ACD1" />
    </BarChart>
  </ResponsiveContainer>
);

const BarChartContainer2 = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={32}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#2161D5" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );


const PieChartContainer = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart width={400} height={400}>
      {/* Your Pie Chart components */}
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#2161D5"
        dataKey="value"
        label
      />
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

const RadarChartContainer = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      {/* Your Radar Chart components */}
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Pria" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Wanita" dataKey="B" stroke="#97ACD1" fill="#97ACD1" fillOpacity={0.6} />
      <Tooltip />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

export default Charts;

