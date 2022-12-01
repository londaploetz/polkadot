import React from 'react';
import './hours.css';

const timesStore = [ 
   { day: "Monday", time: 'Closed'},
   { day: "Tuesday", time: '9:00-6:30'}, 
   { day: "Wednesday", time: '9:00-6:30'},
   { day: "Thursday", time: '9:00-8:30'},
   { day: "Friday", time: '9:00-6:30'},
   { day: "Saturday", time: '9:00-6:30'}, 
   { day: "Sunday", time: 'Closed'}
 ]

 function Hours() {
   return (
     <div className="hours">
      <div className='section_padding'>
       <table className="table_hours"> 
           <th className="th_hours">Opening Times</th>
         {timesStore.map((val, key) => {
           return (
             <tr key={key}>
               <td>{val.day}</td>
               <td>{val.time}</td>
             </tr>
          ); 
         })}
       </table>
      </div>
      </div>
      )
   }
 export default Hours
