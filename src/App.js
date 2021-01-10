import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import SignUp from './components/sign-up/sign-up.component';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
