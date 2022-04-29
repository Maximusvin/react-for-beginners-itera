import data from "./db.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Name: {data.names}</p>
      <p>Bio: {data.biography}</p>
      <p>Local: {data.contacts}</p>
    </div>
  );
}

export default App;

