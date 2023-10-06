const EventsAPI = {
    getAllEvents: async () => {
        try {
            const response = await fetch('http://localhost:3000/events')
            const events = await response.json()
            return events
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    },

    getEventById: async (eventId) => {
        try {
            const response = await fetch(`http://localhost:3000/events/${eventId}`)
            const event = await response.json()
            return event
        } catch (error) {
            onsole.error(`Error fetching event by ID: ${eventId}`, error);
        }
    }
}

export default EventsAPI