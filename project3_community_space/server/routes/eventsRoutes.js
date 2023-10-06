import express from 'express'
// import controllers for events and locations
import EventsController from '../controllers/eventsCRUD.js'


const eventsRouter = express.Router()

// define routes to get events and locations
eventsRouter.get('/', EventsController.getEvents)

eventsRouter.get('/:eventId', EventsController.getEventById)

export default eventsRouter