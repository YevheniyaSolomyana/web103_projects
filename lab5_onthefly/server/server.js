import express from 'express'
import cors from 'cors'
import tripsRouter from './routes/trips.js'
import activitiesRouter from './routes/activities.js'
import destinationsRouter from './routes/destinations.js'
import trips_destinationsRouter from './routes/trips_destinations.js'
import authRouter from './routes/auth.js'
import usersTripsRouter from './routes/users_trips.js'
import passport from 'passport'
import session from 'express-session'
import { GitHub } from './config/auth.js'

// create express app
const app = express()

app.use(session({
  secret: 'codepath',
  resave: false,
  saveUninitialized: true
}))

// middleware to parse JSON data from HTTP requests
app.use(express.json())

// middleware layer to enable Cross Origin requests
app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE,PATCH',
  credentials: true
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(GitHub)
passport.serializeUser((user, done) => {
  done(null, user)
})
passport.deserializeUser((user, done) => {
  done(null, user)
})

app.get('/', (req, res) => {
  res.redirect('http://localhost:3000')
})

// app.get('/', (req, res) => {
//     res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
// })

app.use('/api/trips', tripsRouter)
app.use('/api/activities', activitiesRouter)
app.use('/api/destinations', destinationsRouter)
app.use('/api/trips-destinations', trips_destinationsRouter)
app.use('/auth', authRouter)
app.use('/api/users-trips', usersTripsRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})
