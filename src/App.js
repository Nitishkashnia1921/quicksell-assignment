import Home from "./Home";
import "./css/App.css"
import { useMyContext } from "./MyContext";

function App() {
  const { loading } = useMyContext();
  if(loading) return (<div className="loading-parent"><div className="loading">Loading...</div></div>)
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
