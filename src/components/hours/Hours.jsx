import React from 'react';
import dotborder from "../../assets/dotborder.png"
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
   <div className="hours_page">
    <th className="opening_hours">OPENING TIMES</th>
    <div className="hours_grid">
      <div className="section_padding">
       <table className="table_hours"> 
           
         {timesStore.map((val, key) => {
           return (
             <tr key={key}>
               <td className="td_hours">{val.day}</td>
               <td className='td_hours'>{val.time}</td>
             </tr>
          ); 
         })}
       </table>
      </div>
      </div>
      <div className="info_hours">
        Our opening times are not set in stone, we like to offer flexibility to everyone.
        Please enquire if you need an earier or later appointment.
       </div>
      <div className="dot_border">
      </div>
    </div>
    )
  }
 export default Hours
