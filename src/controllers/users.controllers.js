import { pool } from "../db.js";

export const getUsers = async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users')
    res.send(res.json(rows))
}

export const getUsersById = async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (rows.length === 0) {
        return res.status(404).json({ Message: 'User not found' })
    }
    res.send(res.json(rows))
}

export const deleteUserById = async (req, res) => {
    const { id } = req.params
    const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    console.log(rows)
}

export const createUsers = async (req, res) => {
    try{
        const { name, email } = req.body
        const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1,$2) RETURNING *', [name, email])
        res.send(res.json(rows))
    }
    catch (error) {
        if (error?.code == '23505'){
            return res.status(409).json({message: 'E-mail already exist'})
        }
        console.log(error);
        return res.status(500).json({message: error.detail })
    }

}

export const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const { rows } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id])
    res.send(res.json(rows))
}