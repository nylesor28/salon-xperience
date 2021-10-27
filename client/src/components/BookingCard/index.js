import React, { useState } from 'react';
import{ Card, Content, Icon, ServiceTitle, ServicePrice, ServicesListItem, ActionButton, BackgroundSquare } from '../BookingCardCSS';
// import BookingCardList from '../BookingCardList';
import"./../../assets/css/icofont.min.css";

export default function BookingCard({bookingcard}) {
    // const[bookingcards]=useState(false)
    const[Bookingcards] =useState([
        "{bookingcards.description}",
        "{bookingcards.duration}",
    ])
    return (
        <div>
            <Card>
                <BackgroundSquare />
                <Content>
                    <Icon className ="icofont-infinite"/>
                    <ServiceTitle>{Bookingcards.service}</ServiceTitle>
                    <ServicePrice>{Bookingcards.price}</ServicePrice>
{
    Bookingcards.map(item =>(
        <ServicesListItem>
            <i className="iconfont-check" />
            <span>{item}</span>
        </ServicesListItem>
        
    ))
    }
    <ActionButton>Book Appointment</ActionButton>
             </Content>
            </Card>
            
        </div>
    )
}
