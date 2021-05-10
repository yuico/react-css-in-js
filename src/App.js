import Unsplash from 'unsplash-js';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components';

const unsplash = new Unsplash({ accessKey: 'VqNilJJuCMn6_7VeftXI4VJXdVMqDvnFfeMG4PcCt1U' });

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <NavBar/>
    </Router>
  );
}

export default App;
