import React from 'react';
import './ProgressBarItem.scss'

interface ProgressBarItemProps {
  background: string
}

const ProgressBarItem: React.FC<ProgressBarItemProps> = ({background}) => {
  const backgroundColor: string = background ? background : "#9EA4AB";

  return <div className="progress-bar__item" style={{ background: backgroundColor }}></div>;
};

export default ProgressBarItem;