import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookingPage from './components/pages/BookingPage';
import HomePage from "./components/pages/HomePage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/booking" component={BookingPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
