import React from 'react';

import { Hours, Grid, Navbar, About } from './components';
import './App.css';

function App() {
  const cutPrice = [
    { services: "Ladies Cut and finish", director: '£48', technician: "£36" },
    { services: "Ladies Restyle", director: '£58', technician: "£46" },
    { services: "Ladies Wet Cut", director: '£67', technician: "£25" },
    { services: "Gent's Cut", director: '£17', technician: "£17" },
    { services: "Gent's Crew Cut", director: '£12', technician: "£15" },
    { services: "Children (0-5)", director: '£7', technician: "£7" },
    { services: "Girl's Cut: (6-14)", director: '£15', technician: "£25" },
    { services: "Girl's Cut (15-17)", director: '£25', technician: "£24" },
    { services: "Boy's Cut: (6-14)", director: '£12', technician: "£12" },
    { services: "Boy's Cut (15-17)", director: '£15', technician: "£15" }
  ]

  const colourPrice = [
    { services: "Full Head Foils Long Hair", director: '£78', technician: "£78" },
    { services: "Half Head Foils Long Hair", director: '£58', technician: "£55" },
    { services: "Full Head Foils Short Hair", director: '£50', technician: "£50" },
    { services: "Half Head Foils Short Hair", director: '£40', technician: "£40" },
    { services: "Full Head Block Colour Long Hair", director: '£60', technician: "£60" },
    { services: "Full Head Block Colour Short Hair", director: '£50', technician: "£50" },
    { services: "Root Tint Regrowth", director: '£35', technician: "£25" },
    { services: "Balayage", director: 'from £80', technician: "from £84" }
  ]

  const personalised = [
    { services: " Long Hair", director: '£35', technician: "£25" },
    { services: "Short Hair", director: 'from £80', technician: "from £84" },
    { services: "Colour Correction/Change", director: 'Price on application', technician: "" },
    { services: "Toner/Gloss Service:", director: '£20', technician: "£24" }
  ]

  const service = [cutPrice, colourPrice, personalised];
  const headings = ['Cut', 'Colouring', 'Personalised'];
  const index = [0, 1, 2]

  return (
    <div className="App">
      <div>
        <About />
        {service.map((val, key) => (
          <Grid
            partyServices={val} 
            partyKey={key}
            partyHeadings={headings[key]}
          />
        ))}
        <Hours />
      </div>
      <Navbar />
    </div>
  );
}

export default App;

