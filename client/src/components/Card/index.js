import React from 'react';
import HairTypesCards from '../HairTypesCard';

export default function HairTypesCardList({hairtypescards}) {
    return (
        <div className="card-grid">
            {hairtypescards.map(hairtypescard =>{
                return<HairTypesCards hairtypescard={hairtypescard} key={hairtypescard.id} />
            })}
        </div>
    )
}