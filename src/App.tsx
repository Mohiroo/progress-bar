import React from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';

function App() {
  const items = [
    { name: "Sold", color: "#BD1FBE", value: 677 },
    { name: "Got free", color: "#FC64FF", value: 23 },
    { name: "Burned", color: "#14E435", value: 202 },
    { name: "Free float", color: "#9EA4AB", value: 323 },
  ];

  return (
    <ProgressBar items={items} height={20} width={610}/>
  );
}

export default App;
