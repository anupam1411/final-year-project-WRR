import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Skills from "./Pages/Skills";
import Footer from "./components/footer";
import Card from "./components/Card";
import PdfPage from "./components/pdfPage";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Log from "./Pages/LogIn";
function App() {
  return (
    <div className="2xl:bg-cover bg-theme-light ">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Card" key={1} component={Card} />
          <Route path="/PdfPage" component={PdfPage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Log" component={Log} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
