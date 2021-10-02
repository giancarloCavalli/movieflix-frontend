import { Router, Switch, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Login from "pages/Login";
import MoviesDetails from "pages/MoviesDetails";
import MoviesList from "pages/MoviesList";
import history from "utils/history";

const Routes = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/movies" exact>
          <MoviesList />
        </Route>
        <Route path="/movies/1">
          <MoviesDetails />
        </Route>
      </Switch>
    </Router>
  )  
}

export default Routes;