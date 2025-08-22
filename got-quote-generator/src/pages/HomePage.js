import './../App.css';
import React, { useState, useEffect } from 'react';
import QuoteCard from './../components/QuoteCard.js';

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


function HomePage() {

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  function showNextQuote() {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % gotQuotes.length);
  };
  const currentQuote = gotQuotes[currentQuoteIndex];

  const [showEpicMessage, setShowEpicMessage] = useState(true);
  function toggleEpicMessage() {
    setShowEpicMessage(!showEpicMessage);
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedQuote, setFetchedQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      setIsLoading(true);
      setError(null);

      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        // if (Math.random() > 0.7) {
        //   throw new Error('Fehler beim Abrufen des Zitats!');
        // }
        const selectedQuote = gotQuotes[currentQuoteIndex];
        setFetchedQuote(selectedQuote);
      } catch (err) {
        console.error("Fehler beim Abrufen des Zitats", err);
        setError("Fehler beim Laden des Zitats. Bitte versuchen Sie erneut.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, [currentQuoteIndex, gotQuotes]);

  return (
    <div className="home-page-content">

        {isLoading && (
          <p style={{ color: '#ccc', fontSize: '1.2em' }}>
            Lade Zitat..<span role="img" aria-label="loading spinner">⏳</span>
          </p>
        )}

        {error && (
          <p style={{ color: '#ff6347', fontSize: '1.2em' }}>
            Fehler: {error} <span role="img" aria-label="error icon">❌</span>
          </p>
        )}

        {!isLoading && !error && fetchedQuote && (
          <QuoteCard 
            key={fetchedQuote.id}
            quoteText={fetchedQuote.quote}
            characterName={fetchedQuote.character}
            isQuoteEpic={fetchedQuote.epic}
          />
        )}
        
        {!error && currentQuoteIndex !== null && fetchedQuote && fetchedQuote.epic && (
          <button
            onClick={toggleEpicMessage}
            style={{
              backgroundColor: '#A0522D',
              color: 'white',
              padding: '8px 15px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '10px',
              marginBottom: '10px',
              fontSize: '0.9em'
            }}
          >
           {showEpicMessage ? 'Epische Nachricht ausblenden' : 'Epische Nachricht anzeigen'} 
          </button>
        )}

        {!error && currentQuoteIndex !== null && fetchedQuote && fetchedQuote.epic && showEpicMessage && (
          <p style={{ color: '#F8C471', fontStyle: 'italic', fontSize: '1.2em' }}>
            Das ist ein wahrlich episches Zitat! 👑
          </p>
        )}

        <p></p>

        <button
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
    </div>
  );
}

export default HomePage;
