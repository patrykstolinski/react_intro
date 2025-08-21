import React from 'react';

function QuoteCard({ quoteText, characterName, isQuoteEpic, children, onLike }) {
  return (
    <blockquote>
      "{quoteText}"
      <footer>
        - {characterName}
        {isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
      </footer>
      {children}
    </blockquote>
  );
}

export default QuoteCard;

