import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from './components';
import Home from './pages/Home'
import Images from './pages/Images'

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/images' exact component={Images} />
      </Switch>
    </Router>
  );
}

export default App;
