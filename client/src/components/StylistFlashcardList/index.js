import React from 'react'
import StylistFlashcards from '../StylistFlashcard'

export default function StylistFlashcardList({stylistflashcards}) {
    return (
        <div className="card-grid">
            {stylistflashcards.map(stylistflashcard =>{
                return<StylistFlashcards stylistflashcard={stylistflashcard} key={stylistflashcard.id} />
            })}
        </div>
    )
}

