import express from 'express'
// import controllers for events and locations
import LocationsController from '../controllers/locationsCRUD.js'

const locationsRouter = express.Router()

// define routes to get events and locations
locationsRouter.get('/', LocationsController.getLocations)

locationsRouter.get('/:locationId', LocationsController.getLocationById)

export default locationsRouter