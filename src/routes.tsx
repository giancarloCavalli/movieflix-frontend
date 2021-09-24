import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Login from "pages/Login";
import MoviesDetails from "pages/MoviesDetails";
import MoviesList from "pages/MoviesList";

const Routes = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )  
}

export default Routes;