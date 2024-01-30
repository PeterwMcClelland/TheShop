// import logo from './logo.svg';
import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="hero-txt">
          TileBar
          <span id="icon-2" className="material-symbols-outlined">
            arrow_right_alt
          </span>
          <span id="icon-2" className="material-symbols-outlined">
            arrow_right_alt
          </span>
          <span id="icon-2" className="material-symbols-outlined">
            arrow_right_alt
          </span>
          <span id="icon-2" className="material-symbols-outlined">
            arrow_right_alt
          </span>
          <span id="icon-4" class="material-symbols-outlined">
            local_cafe
          </span>
        </h1>
      </header>
    </div>
  );
}

export default App;
