import React from 'react';
import Accordion from './Components/Accordion'

const items = [
   {
      title: 'What is React?',
      content: 'React is a front-end JavaScript framework.'
   },
   {
      title: 'Why use React?',
      content: 'React is a favorite JS library among engineers.'
   },
   {
      title: 'How do you use React?',
      content: 'You use React by creating components.'
   },
]

function App() {
  return (
      <Accordion items={items} />
  );
}

export default App;
