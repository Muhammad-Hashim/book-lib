import { useState } from 'react';
import './App.css';
import Bookdata from './books.json'

function App() {
  
    


  return (
    <div className="App">
      <div>
        
        {
          Bookdata.map((person) =>(
            <li key={person.id}>
              {person.title} - {person.genre}
            </li>
          ))
        }
      

      </div>
    </div>
  );
}

export default App;
