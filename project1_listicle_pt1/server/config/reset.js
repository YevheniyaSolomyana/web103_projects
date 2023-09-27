import { pool } from "./database.js";
import './dotenv.js'
import placesData from '../data/places.js'

const createPlacesTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS places;

    CREATE TABLE IF NOT EXISTS places (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        pricePerDay TEXT NOT NULL,
        meals TEXT NOT NULL,
        transportation TEXT NOT NULL,
        accommodation TEXT NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL
    )
    `
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 places table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating places table', err)
    }
}

const seedPlacesTable = async () => {
    await createPlacesTable()

    placesData.forEach((place) => {
        const insertQuery = {
            text: 'INSERT INTO places (name, pricePerDay, meals, transportation, accommodation, image, description) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            place.name,
            place.pricePerDay,
            place.meals,
            place.transportation,
            place.accommodation,
            place.image,
            place.description
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting place', err)
                return
            }

            console.log(`✅ ${place.name} added successfully`)
        })
    })
}

seedPlacesTable()