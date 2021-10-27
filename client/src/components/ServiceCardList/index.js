import React from 'react'
import ServiceCards from '../ServiceCard'

export default function ServiceCardList({servicecards}) {
    return (
        <div className="card-grid">
            {servicecards.map(servicecard =>{
                return<ServiceCards ServiceCard={servicecard} key={servicecard.id} />
            })}
        </div>
    )
}