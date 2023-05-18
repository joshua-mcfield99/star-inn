import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Cormorant_Unicase } from 'next/font/google';
import styles from '../styles/Events.module.css';

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    weight: '700',
});

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      fetchEvents();
    }, []);
  
    const fetchEvents = async () => {
      try {
        const requestBody = {
          query: `
            query {
              events {
                _id
                title
                description
                date
              }
            }
          `,
        };
  
        const response = await fetch('https://star-backend.onrender.com/graphql', {
          method: 'POST',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
  
        const { data } = await response.json();
        setEvents(data.events);
      } catch (error) {
        console.log(error);
      }
    };

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    };
  
    return (
      <>
        <Head>
          <title>The Star | Events</title>
        </Head>
        <main>
          <section>
            <h1 className={`${'heading'} ${cormorantUnicase.className}`}>Events</h1>
            <p>Our regular events include a free Quiz Night on Sunday evening from 8pm and local folk musicians playing in the bar from 9pm on Mondays.</p>
          </section>
          <section>
            <h2 className={`${'heading'} ${cormorantUnicase.className}`}>Upcoming Events</h2>
            <div className={`${styles.event_list_container}`}>
              <ul className={`${styles.event_card_list}`}>
                {events.map((event) => (
                  <li key={event._id} className={`${styles.event_card}`}>
                    <h3 className={`${cormorantUnicase.className}`}>{event.title}</h3>
                    <p className={`${styles.date}`}>{formatDate(event.date)}</p>
                    <p className={`${styles.description}`}>{event.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </>
    );
  };

export default Events;