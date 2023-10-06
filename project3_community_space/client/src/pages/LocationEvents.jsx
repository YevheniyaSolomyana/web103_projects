import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'

const LocationEvents = ({ index }) => {
    const locationName = window.location.pathname.split('/').pop();

    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch location data using LocationsAPI
                const locations = await LocationsAPI.getAllLocations();
                const selectedLocation = locations.find((loc) => loc.name.toLowerCase().replace(/ /g, '') === locationName);

                // Fetch events data using EventsAPI
                const eventsData = await EventsAPI.getAllEvents();
                const locationEvents = eventsData.filter((event) => event.name.toLowerCase().replace(/ /g, '') === locationName);

                setLocation(selectedLocation);
                setEvents(locationEvents);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [locationName]);

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents