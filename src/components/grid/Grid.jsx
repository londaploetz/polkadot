import React from 'react';
import './grid.css';



const cutPrice = [
  { cutting: "Ladies Cut and finish", director: '£48', technician: "£36" },
  { cutting: "Ladies Restyle", director: '£58', technician: "£46" },
  { cutting: "Ladies Wet Cut", director: '£67', technician: "£25" },
  { cutting: "Gent's Cut", director: '£17', technician: "£17" },
  { cutting: "Gent's Crew Cut", director: '£12', technician: "£15" },
  { cutting: "Children (0-5)", director: '£7', technician: "£7" },
  { cutting: "Girl's Cut: (6-14)", director: '£15', technician: "£25" },
  { cutting: "Girl's Cut (15-17)", director: '£25', technician: "£24" },
  { cutting: "Boy's Cut: (6-14)", director: '£12', technician: "£12" },
  { cutting: "Boy's Cut (15-17)", director: '£15', technician: "£15" }
]

const colourPrice = [
  { colouring: "Full Head Foils Long Hair", director: '£78', technician: "£78" },
  { colouring: "Half Head Foils Long Hair", director: '£58', technician: "£55" },
  { colouring: "Full Head Foils Short Hair", director: '£50', technician: "£50" },
  { colouring: "Half Head Foils Short Hair", director: '£40', technician: "£40" },
  { colouring: "Full Head Block Colour Long Hair", director: '£60', technician: "£60" },
  { colouring: "Full Head Block Colour Short Hair", director: '£50', technician: "£50" },
  { colouring: "Root Tint Regrowth", director: '£35', technician: "£25" },
  { colouring: "Balayage", director: 'from £80', technician: "from £84" }
]
  
 const personalised = [ 
  { personal: " Long Hair", director: '£35', technician: "£25" },
  { personal: "Short Hair", director: 'from £80', technician: "from £84" }, 
  { personal: "Colour Correction/Change", director: 'Price on application', technician: "" },
  { personal: "Toner/Gloss Service:", director: '£20', technician: "£24" }
]

function Grid() {
  return (
    <div className='padding_grid'>
    <div className="cutting">
      <table className='table_grid'>
        <tr>
          <th>Cutting</th>
          <th>Director</th>
          <th>Senior Technician</th>
        </tr>
        {cutPrice.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.cutting}</td>
              <td>{val.director}</td>
              <td>{val.technician}</td>
            </tr>
          ); 
        })}
      </table>
      <div className="colouring">
      <table className="table_grid">
        <tr>
          <th>Colouring</th>
          <th>Director</th>
          <th>Senior Technician</th>
        </tr>
        {colourPrice.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.colouring}</td>
              <td>{val.director}</td>
              <td>{val.technician}</td>
            </tr>
          ); 
        })}
        </table>
         <div className="personal_grid">
         <table className='table_grid_personal'>
        <tr>
          <th>Personalised Colour</th>
          <th>Director</th>
          <th>Senior Technician</th>
        </tr>
        {personalised.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.personal}</td>
              <td>{val.director}</td>
              <td>{val.technician}</td>
            </tr>
          ); 
        })}
      </table>
     </div>
    </div>
   </div>
   </div>
 )
}

export default Grid