import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </AnimatePresence>
  );
}
export default Pages;
