import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

import "./app.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
// import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Category } from "./components/Category";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="content">
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/category/:name" element={<Category />} />
              <Route element={<NotFound />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
