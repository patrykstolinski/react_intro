import './App.css';

const quote = "Der Winter naht.";
const character = "Ned Stark";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Game of Thrones Zitat-generator</h1>
      <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      <main>
        <blockquote>
          "{quote}"
        </blockquote>
      </main>
      <footer>- {character} </footer>
      </header>
    </div>
  );
}

export default App;
