import React from "react";

const quoteStyle = {
  fontStyle: 'italic',
  color: '#f89a03ff',
  fontSize: '1.5em',
  marginBottom: '10px',
  borderLeft: '4px solid #f89a03ff',
  paddingLeft: '15px'
};

const characterStyle = {
  fontSize: '0.8em',
  color: '#434343ff',
  marginTop: '5px',
  display: 'block'
};

function QuoteCard({ quoteText, characterName, isQuoteEpic, onLike }) { // ✅ children removed
  return (
    <blockquote style={quoteStyle}>
      "{quoteText}"
      <footer style={characterStyle}>
        - {characterName}
        {isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
      </footer>
      <button
        onClick={onLike}
        style={{
          backgroundColor: '#b3461bff', // kept your color
          color: 'white',
          padding: '8px 15px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Like!
      </button>
    </blockquote>
  );
}

export default QuoteCard;
