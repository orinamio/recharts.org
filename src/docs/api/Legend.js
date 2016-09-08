import React from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const example = () => (
  <LineChart width={730} height={250} data={data}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend verticalAlign="top" height={36}/>
    <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
);


export default {
  name: 'Legend',
  desc: 'By default, the content of legend is generated by the name of Line, Bar, Area, etc. When no name has been setted, dataKey will be used to generate legend content alternatively.',
  examples: [
    {
      name: 'Simple LineChart',
      demo: example,
      code: `<LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Legend verticalAlign="top" height={36}/>
  <Line name="pv of pages" type="monotone" dataKey="pv" stroke="#8884d8" />
  <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>`
    },
  ],
  props: [
    {
      name: 'width',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The width of legend.',
    }, {
      name: 'height',
      type: 'Number',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The width of legend.',
    }, {
      name: 'layout',
      type: '\'horizontal\', \'vertical\'',
      defaultVal: '\'horizontal\'',
      isOptional: false,
      desc: 'The layout of legend items.',
    }, {
      name: 'align',
      type: '\'left\', \'center\', \'right\'',
      defaultVal: '\'center\'',
      isOptional: false,
      desc: 'The alignment of legend items when the layout is \'horizontal\', which cen be \'left\', \'center\', \'right\'.',
    }, {
      name: 'verticalAlign',
      type: '\'top\', \'middle\', \'bottom\'',
      defaultVal: '\'middle\'',
      isOptional: false,
      desc: 'The alignment of legend items when the layout is \'vertical\', which can be \'top\', \'middle\', \'bottom\'.',
    }, {
      name: 'iconSize',
      type: 'Number',
      defaultVal: '14',
      isOptional: false,
      desc: 'The size of icon in each legend item.',
    }, {
      name: 'payload',
      type: 'Array',
      defaultVal: '[]',
      isOptional: false,
      desc: 'The source data of the content to be displayed in the legend, usually calculated internally.',
      format: ['[{ value: \'item name\', type: \'line\', id: \'ID01\' }]'],
    }, {
      name: 'chartWidth',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The width of chart container, usually calculated internally.',
    }, {
      name: 'chartHeight',
      type: 'Number',
      defaultVal: 'null',
      isOptional: false,
      desc: 'The height of chart container, usually calculated internally.',
    }, {
      name: 'margin',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The margin of chart container, usually calculated internally.',
      format: [`{ top: 0, left: 0, right: 0, bottom: 0 }`],
    }, {
      name: 'content',
      type: 'ReactElement | Function',
      defaultVal: 'null',
      isOptional: true,
      desc: 'If set to a React element, the option will be used to render the legend. If set to a function, the function will be called to render the legend\'s content.',
      format: [
        `<Legend content={<CustomizedLegend external={external} />} />`,
        `
const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul>
      {
        payload.map((entry, index) => (
          <li key={\`item-\$\{index\}\`}>{entry.value}</li>
        ))
      }
    </ul>
  );
}
<Legend content={renderLegend} />`
      ],
    }, {
      name: 'wrapperStyle',
      type: 'Object',
      defaultVal: 'null',
      isOptional: true,
      desc: 'The style of legend container which is a "position: absolute;" div element. Because the position of legend is quite flexible, so you can change the position by the value of top, left, right, bottom in this option. And the format of wrapperStyle is the same as React inline style.',
      examples: [{
        name: 'React Inline style',
        url: 'https://facebook.github.io/react/tips/inline-styles.html',
      }],
    },
  ],
};
