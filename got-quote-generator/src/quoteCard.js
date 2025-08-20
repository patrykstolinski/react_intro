import React from "react";


function QuoteCard(props) {

    return (
        <blockquote style={props.quoteStyle}>
            "{props.quoteText}"
            <footer style={props.characterStyle}>
                - {props.characterName}
                {props.isQuoteEpic && <span style={{ marginLeft: '10px' }}>🌟</span>}
            </footer>
        </blockquote>
    )
}

export default QuoteCard;