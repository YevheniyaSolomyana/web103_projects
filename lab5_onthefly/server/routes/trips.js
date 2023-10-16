import express from 'express'
import TripsController from '../controllers/tripsCRUD.js'

const tripsRouter = express.Router()

// Define a GET route handler that calls getTrips when a GET request is made to /trips
tripsRouter.get('/', TripsController.getTrips)

tripsRouter.get('/:id', TripsController.getTrip)

tripsRouter.post('/', TripsController.createTrip)

tripsRouter.delete('/:id', TripsController.deleteTrip)

tripsRouter.patch('/:id', TripsController.updateTrip)

export default tripsRouter
