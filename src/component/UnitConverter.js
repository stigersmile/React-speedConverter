import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UnitConverter =( {handleInputChange,inputValue})=>(

    // const {handleInputChange,inputValue} = props;

        <div className="converter">
                <div className="flex-1">
                <div className="converter-title">Set</div>
                <input type="number" onChange ={handleInputChange} value={inputValue} className="input-number" min="0" />
                </div>
                {/* <span className="angle-icon fa-2x" style={{ margintop: 30 }}>
                <i className="fas fa-angle-right" ></i>
                </span> */}
                 <span className="angle-icon fa-2x" style={{ marginTop: 30 }}>
      <FontAwesomeIcon icon={['fas', 'angle-right']} />
    </span>
                <div className="text-right flex-1">
                <div className="converter-title">Show</div>
                <input type="number" 
                value ={inputValue/8} 
                className="input-number text-right" 
                disabled
                min="0" 
                />
                </div>
        </div> 
   
);
 
export default UnitConverter;