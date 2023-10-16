import express from 'express'
import ActivitiesController from '../controllers/activitiesCRUD.js'

const activitiesRouter = express.Router()

activitiesRouter.get('/', ActivitiesController.getActivities)

activitiesRouter.get('/:trip_id', ActivitiesController.getTripActivities)

activitiesRouter.post('/:trip_id', ActivitiesController.createActivity)

activitiesRouter.delete('/:id', ActivitiesController.deleteActivity)

activitiesRouter.patch('/:id', ActivitiesController.updateActivityLikes)

export default activitiesRouter
