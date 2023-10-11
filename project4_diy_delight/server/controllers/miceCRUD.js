import { pool } from "../config/database.js";

const getMice = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM CustomItem ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const getMouseById = async (req, res) => {
    try {
        const selectQuery = `
        SELECT name, color, feature, scrolltype
        FROM CustomItem
        WHERE id=$1
        `
        const mouseId = req.params.mouseId
        const results = await pool.query(selectQuery, [mouseId])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const createMouse = async (req, res) => {
    try {
        const {name, color, feature, scrolltype} = req.body
        const results = await pool.query(`
        INSERT INTO CustomItem (name, color, feature, scrolltype)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
            [name, color, feature, scrolltype]
        )
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const updateMouse = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const {name, color, feature, scrolltype} = req.body
        const results = await pool.query(`
        UPDATE CustomItem SET name = $1, color = $2, feature = $3, scrolltype = $4
        WHERE id = $5
        RETURNING *`,
            [name, color, feature, scrolltype, id]
        )
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message })        
    }
}

const deleteMouse = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM CustomItem WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json({ error: error.message})
    }
}

export default { getMice, getMouseById, createMouse, updateMouse, deleteMouse }