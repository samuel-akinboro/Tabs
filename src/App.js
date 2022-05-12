import {Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import LoggedIn from "./components/LoggedIn"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />}/>
          <Route path="/dashboard" element={<LoggedIn />}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
