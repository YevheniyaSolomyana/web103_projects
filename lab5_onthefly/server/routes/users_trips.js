import express from 'express'
import UsersTripsController from '../controllers/users_tripsCRUD.js'

const usersTripsRouter = express.Router()

usersTripsRouter.post('/create/:trip_id', UsersTripsController.createTripUser)

usersTripsRouter.get('/users/:trip_id', UsersTripsController.getTripUsers)

usersTripsRouter.get('/trips/:username', UsersTripsController.getUserTrips)


export default usersTripsRouter