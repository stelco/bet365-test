import React from 'react';
import Card from './components/Card';
import './App.scss';
import './global.scss';
import { cardData } from './data/CardData';

function App() {
  return (
    <div>
      <main className='container'>
          <Card cardData={cardData} />
      </main>
    </div>
  );
}

export default App;
