import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';
import Login from './Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();
function App(props) {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
