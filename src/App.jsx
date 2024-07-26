
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Router>
       <Home />
      </Router>
    </div>
  );
};

export default App;
