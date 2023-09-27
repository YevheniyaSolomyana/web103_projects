import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
// import placesData from '../data/places.js'
import PlacesController from '../controllers/placesCRUD.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const placesRouter = express.Router()

// placesRouter.get('/', (req, res) => {
//     res.status(200).json(placesData)
// })
placesRouter.get('/', PlacesController.getPlaces)

placesRouter.get('/:placeId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/place.html'))
})

export default placesRouter