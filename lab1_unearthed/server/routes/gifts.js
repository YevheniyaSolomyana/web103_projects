import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftData from '../data/gifts.js'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const giftsRouter = express.Router()

giftsRouter.get('/', (req, res) => {
    res.status(200).json(giftData)
})

giftsRouter.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default giftsRouter