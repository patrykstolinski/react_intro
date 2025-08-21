import React, { useState } from 'react'; // useState importiert
import './App.css';
import QuoteCard from './quoteCard';

function App() {
  const gotQuotes = [
    { id: 1, quote: "Der Winter naht.", character: "Ned Stark", epic: true },
    { id: 2, quote: "Ein Lannister begleicht stets seine Schulden.", character: "Tyrion Lannister", epic: false },
    { id: 3, quote: "Wenn du das Spiel der Throne spielst, gewinnst du oder du stirbst. Es gibt keinen Mittelweg.", character: "Cersei Lannister", epic: true },
    { id: 4, quote: "Die Nacht ist dunkel und voller Schrecken.", character: "Melisandre", epic: false },
    { id: 5, quote: "Ich trinke und ich weiß Dinge.", character: "Tyrion Lannister", epic: true },
    { id: 6, quote: "Das Chaos ist keine Grube. Das Chaos ist eine Leiter.", character: "Petyr Baelish", epic: false },
    { id: 7, quote: "Hodor!", character: "Hodor", epic: false },
    { id: 8, quote: "Valar Morghulis.", character: "Jaqen H'ghar", epic: true },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); // NEUE Zeile

  const quoteStyle = {
    fontStyle: 'italic',
    color: '#F8C471',
    fontSize: '1.5em',
    marginBottom: '10px',
    borderLeft: '4px solid #F8C471',
    paddingLeft: '15px'
  };

  const characterStyle = {
    fontSize: '0.8em',
    color: '#ccc',
    marginTop: '5px',
    display: 'block'
  };

  const handleLike = (characterName) => {
    console.log(`${characterName} Zitat wurde geliked!`);
  };

  const showNextQuote = () => { // NEUE Funktion
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % gotQuotes.length);
  };

  const currentQuote = gotQuotes[currentQuoteIndex]; // NEUE Zeile

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game of Thrones Zitat-Generator</h1>
        <p>Ein Ort für Weisheit (und Sarkasmus) aus Westeros.</p>
      </header>
      <main>
        <QuoteCard // Geändert: nur eine QuoteCard
          key={currentQuote.id}
          quoteText={currentQuote.quote}
          characterName={currentQuote.character}
          isQuoteEpic={currentQuote.epic}
          onLike={() => handleLike(currentQuote.character)}
        />
        <button // NEUER Button
          onClick={showNextQuote}
          style={{
            backgroundColor: '#DAA520',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '20px',
            fontSize: '1.1em',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
        >
          Nächstes Zitat »
        </button>
      </main>
    </div>
  );
}

export default App;

