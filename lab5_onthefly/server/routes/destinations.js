import express from 'express'
import DestinationsController from '../controllers/destinationsCRUD.js'

const destinationsRouter = express.Router()

destinationsRouter.get('/', DestinationsController.getDestinations)

destinationsRouter.get('/:id', DestinationsController.getDestination)

destinationsRouter.post('/', DestinationsController.createDestination)

destinationsRouter.delete('/:id', DestinationsController.deleteDestination)

destinationsRouter.patch('/:id', DestinationsController.updateDestination)

export default destinationsRouter
