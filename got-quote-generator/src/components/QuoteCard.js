import React from "react";
import styles from "./QuoteCard.module.css";


function QuoteCard({ quoteText, characterName, isQuoteEpic, children }) {

    return (
        <blockquote className={styles.card}>
            <p className={styles.quoteText}>"{quoteText}"</p>
            <footer className={styles.footer}>
                <span className={styles.characterName}>- {characterName}</span>
                {isQuoteEpic && <span className={styles.epicStar} role="img" aria-label="epic star">🌟</span>}
            </footer>
            {children}
        </blockquote>
    )
}

export default QuoteCard;