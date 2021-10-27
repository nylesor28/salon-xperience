// import React from 'react';
import BookingCard from '../components/BookingCard';
// import BookingCardList from "../components/BookingCardList";
import React, { useState, useEffect } from "react";

function Pricing() {
  const [bookingcards, setBookingCards] = useState(BookingCards);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* <BookingCardList /> */}
      <BookingCard />
    </div>
  );
}

const BookingCards = [
  {
    id: 0,
    service: "Blow Dry",
    price: "$70",
    description: "Paul Mitchell",
    duration: "1 hour",
  },
  {
    id: 1,
    service: "Brazialian Blowout",
    price: "$180",
    description: "Paul Mitchell",
    duration: "1 hour",
  },
  {
    id: 2,
    service: "Custom Color",
    price: "$235",
    description: "Paul Mitchell",
    duration: "3 hour",
  },
  {
    id: 3,
    service: "Box Braides",
    price: "$175",
    description: "Paul Mitchell",
    duration: "4 hour",
  },
  {
    id: 4,
    service: "The Ultimate Gentlemen",
    price: "$70",
    description: "Facial, shave, and design",
    duration: "1 hour",
  },
  {
    id: 5,
    service: "Traditional",
    price: "$40",
    description: "haricut with shears or clippers",
    duration: "1 hour",
  },
];
export default Pricing;
