import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Item from "./screens/Item";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <Page>
              <Search />
            </Page>
          )}
        />
        <Route
          exact
          path="/movie/:movieId/"
          render={() => (
            <Page>
              <Item />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
