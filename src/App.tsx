import React from 'react';
import Card from './components/Card';
import './App.scss';
import './global.scss';
import { cardData } from './data/CardData';

function App() {
  return (
    <div>
      <div className='header'>
        <h1>Card Component</h1>
        <p>
          Storybook documentation is{' '}
          <a href="https://bet365-test-lnyhhflo4-steven-collins-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
            available here
          </a>
        </p>
      </div>

      <main className='container'>
        <Card cardData={cardData} />
      </main>
    </div>
  );
}

export default App;
