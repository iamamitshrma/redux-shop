import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" index element={<ProductListing/>}/>
          <Route path="/product/:productId" element={<ProductDetail/>}/>
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
