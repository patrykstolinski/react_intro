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

function QuoteCard(props) {

    return (
        <blockquote style={quoteStyle}>
            "{props.quoteText}"
            <footer style={characterStyle}>
                - {props.characterName}
                {props.isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
        </blockquote>
    )
}

export default QuoteCard;