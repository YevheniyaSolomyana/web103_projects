import express from 'express'
import cors from 'cors'
import tripsRouter from './routes/trips.js'
import activitiesRouter from './routes/activities.js'
import destinationsRouter from './routes/destinations.js'
import trips_destinationsRouter from './routes/trips_destinations.js'

// create express app
const app = express()

// middleware to parse JSON data from HTTP requests
app.use(express.json())

// middleware layer to enable Cross Origin requests
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
})

app.use('/api/trips', tripsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/destinations', destinationsRouter)
app.use('/api/', trips_destinationsRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})
