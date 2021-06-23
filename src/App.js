import "./App.css";
import HappyPage from "./pages/HappyPage";
import Checkbox from "./components/Checkbox";

function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <Checkbox checked="true" item="User Interface" />
        <Checkbox checked="true" item="Create dummy data" />
        <Checkbox checked="true" item="Create database" />
        <Checkbox
          checked="true"
          item="Able to render the data throughout component"
        />
        <Checkbox checked="true" item="Able to get all" />
        <Checkbox checked="true" item="Able to post" />
        <Checkbox
          checked="true"
          item="Implement createSlice method"
        />
        <h4>If have time</h4>
        <Checkbox item="Add works" />
        <HappyPage />
      </div>
    </div>
  );
}

export default App;
