import React from 'react';
import { AnalysisPage } from 'pages/AnalysisPage';
import { Providers } from 'providers/Providers';

import './App.css';

function App(props: any) {
  return (
    <Providers {...props}>
      <AnalysisPage />
    </Providers>
  );
}

export default App;
