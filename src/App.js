import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import LoginPage from "./page/LoginPage";
import NavBar from "./component/NavBar";
import { useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authentication, setAuthentication] = useState(false);

  return (
    <div className="body">
      <NavBar
        authentication={authentication}
        setAuthentication={setAuthentication}
      />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<LoginPage setAuthentication={setAuthentication} />}
        />
        <Route
          path="/products/:id"
          element={<PrivateRoute authentication={authentication} />}
        />
      </Routes>
    </div>
  );
}

export default App;
