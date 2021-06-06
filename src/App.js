///packages

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

///css
import "./App.css";

///components
import Navbar from "../src/components/Navbar";

//pages
import Aboutpage from "../src/pages/Aboutpage";
import Homepage from "../src/pages/Homepage";
import SinglePage from "../src/pages/SinglePage";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={Aboutpage} />
          <Route path="/singleshow/:id" component={SinglePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
