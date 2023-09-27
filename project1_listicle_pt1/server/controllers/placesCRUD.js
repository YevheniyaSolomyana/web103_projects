import { pool } from "../config/database.js";

const getPlaces = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM places ORDER BY id ASC')
        res.status(200).json(results.rows)
        console.log(results.rows)
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
}

export default { getPlaces }