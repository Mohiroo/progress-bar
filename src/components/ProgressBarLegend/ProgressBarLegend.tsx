import React from 'react';
import './ProgressBarLegend.scss'

interface ProgressBarLegendProps {
  circleBackground: string;
  name: string
  value: number
  percent: string
}

const ProgressBarLegend: React.FC<ProgressBarLegendProps> = ({circleBackground, name, value, percent}) => {
  return (
    <div className='progress-legend'>
      <span className='legend__circle' style={{background: circleBackground}}></span>
      <span className='legend__info'>{name}: {value} ({percent} %)</span>
    </div>
  );
};


export default ProgressBarLegend;