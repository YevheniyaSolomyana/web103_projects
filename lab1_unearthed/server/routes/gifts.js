import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url'
// import giftData from '../data/gifts.js' => don't need this anymore since we are serving tehe data from the database instead of directly from this file
import GiftsController from '../controllers/giftsCRUD.js'

// don't need this anymore after connect React and API
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

const giftsRouter = express.Router()

// giftsRouter.get('/', (req, res) => {
//     res.status(200).json(giftData)
// })
giftsRouter.get('/', GiftsController.getGifts)

// giftsRouter.get('/:giftId', (req, res) => {
//     res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
// })
giftsRouter.get('/:giftId', GiftsController.getGiftById)

giftsRouter.post('/', GiftsController.createGift)
giftsRouter.delete('/:id', GiftsController.deleteGift)
giftsRouter.patch('/:id', GiftsController.updateGift)

export default giftsRouter