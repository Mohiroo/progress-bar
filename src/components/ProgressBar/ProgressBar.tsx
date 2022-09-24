import React from "react";
import ProgressBarItem from "../ProgressBarItem/ProgressBarItem";
import "./ProgressBar.scss";
import { v4 as uuidv4 } from "uuid";
import ProgressBarLegend from "../ProgressBarLegend/ProgressBarLegend";

interface ProgressBarProps {
  items: ProgressBarItems[];
  height: number;
  width: number;
}

interface ProgressBarItems {
  name: string;
  color: string;
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ items, height, width }) => {
  const total: number = items.reduce((acc, item) => {
    return acc + item.value;
  }, 0);

  const itemWidth: number = 10; // ширина item
  const itemConunt: number = width / itemWidth;

  return (
    <div className="progress" style={{maxWidth: `${width}px` }}>
      <div className="progress-bar" style={{ height: `${height}px`, maxWidth: `${width}px` }}>
        {items.map((val) => {
          let valPercent = itemConunt * (val.value / total);
          valPercent = valPercent < 0.5 ? 1 : Math.round(itemConunt * (val.value / total));

          return Array.from({ length: valPercent }, () => (
            <ProgressBarItem key={uuidv4()} background={val.color} />
          ));
        })}
      </div>
      <div className="progress-legend">
        {items.map((val) => {
          const valPercent = (itemConunt * (val.value / total)).toFixed(1);
          return (
            <ProgressBarLegend
              circleBackground={val.color}
              name={val.name}
              value={val.value}
              percent={valPercent}
              key={uuidv4()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
