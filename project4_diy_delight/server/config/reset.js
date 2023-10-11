import { pool } from '../config/database.js'
import '../config/dotenv.js'

const createTable = async () => {
    const createTableQuery = `
    DROP TABLE IF EXISTS CustomItem;

    CREATE TABLE IF NOT EXISTS CustomItem (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        color VARCHAR(255) NOT NULL,
        feature VARCHAR(255) NOT NULL,
        scrolltype VARCHAR(255) NOT NULL
    )
    `

    try {
        await pool.query(createTableQuery)
        console.log('🎉 CustomItem table created successfully')
    } catch (err) {
        console.error('⚠️ error creating CustomItem table', err)
    }
}

createTable()