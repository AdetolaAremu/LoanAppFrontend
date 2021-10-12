import './App.css';
import Users from './Pages/Users'
import NavBar from './components/NavBar'
import Home from './Pages/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
    <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
    </Router>
  );
}

export default App;
