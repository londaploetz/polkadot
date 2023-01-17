import React from 'react';
import './grid.css';
import GridHead from './GridHead';
import GridRow from './GridRow';



function Grid(props) {
  return (
    <div className='padding_grid'>
      {/* {console.log(props)}  */}
      <div className="cutting">
        <table className='table_grid'>
          <GridHead
            columnOne={props.partyHeadings}
          />
        
        {props.partyServices.map((val, key) => ( 

            <GridRow
              first={val.services}
              second={val.director}
              third={val.technician}
            />
         ))}
        </table>
      </div>
    </div>
  )
}

export default Grid