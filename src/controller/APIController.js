import pool from "../configs/connectDB";

let getAllUsers = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.status(200).json({ //200: sever run successfully, 404: server fails, 501: server crashs
        message:'ok',
        data: rows
    });
}

let createNewUser = async (req, res) => {
    let {firstName, lastName, email, address} = req.body;

    //check the valid of data
    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            message:'missing required params',
        });
    }
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)', 
      [firstName, lastName, email, address]);

    return res.status(200).json({
        message:'ok',
    });
}

let updateUser = async (req, res) => {
    let {firstName, lastName, email, address, userId} = req.body;

    //check the valid of data
    if(!firstName || !lastName || !email || !address || !userId){
        return res.status(200).json({
            message:'missing required params',
        });
    }

    await pool.execute('update users set firstname = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, userId]);

    return res.status(200).json({
        message:'ok',
    });
}

let deleteUser = async (req, res) => {
    let userId = req.params.userId;
    if(!userId){
        return res.status(200).json({
            message:'missing required params',
        });
    }
    await pool.execute(`delete from users where id = ?`, [userId]);

    return res.status(200).json({
        message:'ok',
    });
}

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}