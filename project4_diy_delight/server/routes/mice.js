import express from 'express'
import MiceController from '../controllers/miceCRUD.js'

const miceRouter = express.Router()

miceRouter.get('/', MiceController.getMice)

miceRouter.get('/:mouseId', MiceController.getMouseById)

miceRouter.post('/', MiceController.createMouse)

miceRouter.delete('/:id', MiceController.deleteMouse)

miceRouter.patch('/:id', MiceController.updateMouse)

export default miceRouter