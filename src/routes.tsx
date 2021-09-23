import Navbar from "components/Navbar";
import Login from "pages/Login";
import MoviesList from "pages/MoviesList";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/movies">
          <MoviesList />
        </Route>
      </Switch>
    </BrowserRouter>
  )  
}

export default Routes;