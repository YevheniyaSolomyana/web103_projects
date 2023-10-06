// In the config directory, create a new file called reset.js to create the 
// tables you will need to store the events and locations data that your web app 
// will need to work with.

import { pool } from "./database.js";
import './dotenv.js'
import eventData from '../data/eventsData.js'
import locationData from '../data/locationsData.js'

const createEventsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      time VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (name, title, time, image) VALUES ($1, $2, $3, $4)'
        }

        const values = [
            event.name,
            event.title,
            event.time,
            event.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }
            console.log(`✅ ${event.name} added successfully`)
        })
    })
}

seedEventsTable()

const createLocationsTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(10) NOT NULL,
      zip VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 locations table created successfully')
    } catch (err) {
        console.error('⚠️ error creating locations table', err)
    }
}

const seedLocationsTable = async () => {
    await createLocationsTable()

    locationData.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, address, city, state, zip, image) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err)
                return
            }
            console.log(`✅ ${location.name} added successfully`)
        })
    })
}

seedLocationsTable()