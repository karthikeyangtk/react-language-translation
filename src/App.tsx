import { ToastContainer } from "react-toastify";
import Login from "./component/login";
import './App.css';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
       <ToastContainer position={"top-right"} closeOnClick limit={1} autoClose={1000} />
       <Login />
    </div>
  );
}

export default App;
