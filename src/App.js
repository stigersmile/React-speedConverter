import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import CardFooter from './component/CardFooter'
import UnitControl from './component/UnitControl'
import UnitConverter from './component/UnitConverter'

import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas,far)

function App() {

  // [0]監控變數 [1]改變資料的方法
  const[inputValue,setInputValue] = useState(0);
  
  const handleInputChange = (e) =>{
    const{value} = e.target;
    setInputValue(value);

  }

    return (
    <div className="container">

    <div className="card-header">Network Speed Converter</div>
    <div className="card-body">
     <UnitControl/>
     <UnitConverter inputValue ={inputValue} handleInputChange ={handleInputChange} />
    </div>
      {/* 傳入資料至CardFooter */}
      <CardFooter inputValue ={inputValue}></CardFooter>
  </div>
  );
}

export default App;

