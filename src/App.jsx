import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GoodItem from "./pages/GoodItem/GoodItem";
import Category from "./pages/Category/Category";
import Recipe from "./pages/Recipe/Recipe";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Random from "./pages/Random/Random";

// style css
import "./App.css";

function App() {
  return (
    <>
      {/* navigation */}
      <Router>
        <Header />
        <main className="main-box">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/goodItem" element={<GoodItem />}></Route>
            <Route path="/random" element={<Random />}></Route>

            {/* change URL (:name. :id)*/}
            <Route path="/categories/:name" element={<Category />}></Route>
            <Route path="/meal/:id" element={<Recipe />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
