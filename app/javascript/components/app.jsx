import React from "react"
import ReactDOM from "react-dom/client" 
import { BrowserRouter,  Routes,  Route,} from "react-router-dom";

import PlacesList from "./places_list"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PlacesList />} />
      </Routes>
    </BrowserRouter>
  );
}

// this code render react into the DOM
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
