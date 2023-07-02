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
              {<img src={person.thumbnailUrl} alt="ok" ></img>}  {person.title} - {person.genre} 
            </li>
          ))
        }

      </div>
    </div>
  );
}

export default App;
