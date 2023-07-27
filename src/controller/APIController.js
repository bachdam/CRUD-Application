import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({ //200: sever run successfully, 404: server fails, 501: server crashs
        message:'ok',
        data: rows
    });
}

module.exports = {
    getAllUsers
}