import React, { useState } from 'react';
import BarChar from '../../components/Charts/BarChar';
import PieChar from '../../components/Charts/PieChart';
import LineChar from '../../components/Charts/LineChar';
import './analytics.css';

const Analytics: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState('');

  const handleButtonClick = (chartType: string) => {
    setSelectedChart(chartType);
  };

  return (
    <div className="analytics-container">
      <div className="action-buttons">
        <button
          style={{ backgroundColor: "#05668D" }}
          onClick={() => handleButtonClick('bar')}
        >
          Bar Chart
        </button>
        <button
          style={{ backgroundColor: "#8F7E4F" }}
          onClick={() => handleButtonClick('pie')}
        >
          Pie Chart
        </button>
        <button
          style={{ backgroundColor: "#524632" }}
          onClick={() => handleButtonClick('line')}
        >
          Other Chart
        </button>
      </div>
      <div className="chart-container">
        {selectedChart === 'bar' && <BarChar />}
        {selectedChart === 'pie' && <PieChar />}
        {selectedChart === 'line' && <LineChar />}
      </div>
    </div>
  );
};

export default Analytics;

