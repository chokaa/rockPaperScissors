import React from 'react';
import Layout from './Layout';
import { AppProvider } from './AppState';

const App = () => {
  return(
    <AppProvider>
      <Layout />
    </AppProvider>
  )
};

export default App;