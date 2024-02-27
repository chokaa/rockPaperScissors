import Layout from './components/Layout';
import { AppProvider } from './state/AppState';

const App = () => {
  return(
    <AppProvider>
      <Layout />
    </AppProvider>
  )
};

export default App;