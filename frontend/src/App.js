import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './index.css';
import Navig from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./container/Dashboard";
import Payouts from "./container/Payouts";
import Edit from "./container/Edit";
import Setting from "./container/Setting";
import Order from "./container/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Navig />
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/edit-profile" component={Edit} exact />
          <Route path="/setting" component={Setting} exact />
          <Route path="/order" component={Order} exact />
          <Route path="/payouts" component={Payouts} exact />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
