import express from 'express'
import TripsDestinationsController from '../controllers/trips_destinationsCRUD.js'

const trips_destinationsRouter = express.Router()

trips_destinationsRouter.get('/', TripsDestinationsController.getTripsDestinations)
trips_destinationsRouter.get('/trips/:destination_id', TripsDestinationsController.getAllTrips)
trips_destinationsRouter.get('/destinations/:trip_id', TripsDestinationsController.getAllDestinations)
trips_destinationsRouter.post('/', TripsDestinationsController.createTripDestination)

export default trips_destinationsRouter