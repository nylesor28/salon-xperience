import React from 'react'
import Flashcards from '../Flashcard'

export default function FlashcardList({flashcards}) {
    return (
        <div className="card-grid">
            {flashcards.map(flashcard =>{
                return<Flashcards flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}

