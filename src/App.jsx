import { useState } from 'react'
import CharacterList from './components/CharacterList';
import './App.css'

function App() {
  return(
    <div className="App">
      <h1>Hogwarts Directory</h1>
      <p className="developer-credit"> Web Design and Development Assignment</p>
      <CharacterList />
      <footer className="magical-footer">
                <p>Curated by the Ministry of Magic | Riya Dey</p>
            </footer>
    </div>
  );
}

export default App
