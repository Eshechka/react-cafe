import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <div className="container">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
