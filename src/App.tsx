import React from 'react';
import { Providers } from 'providers/Providers';

import './App.css';

function App(props: any) {
  return (
    <Providers {...props}>
      <div className="App">
      </div>
    </Providers>
  );
}

export default App;
