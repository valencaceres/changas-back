import connection from "../../config/database.js";

const usersController = {
    
    create: async (req, res, next) => {
        try{
            const {fname, lname, username, email, password} = req.body;
            const query = `INSERT INTO users (fname, lname, username, email, password) VALUES ('${fname}','${lname}','${username}','${email}','${password}') RETURNING *` 
            const response = await connection.query(query) ;
            console.log(response);
            return res.status(200).json(response.rows[0]);
        }
        catch(error){
            console.log(error)
            next(error)
        }
    },
    get: async (req, res, next) => {
        try{
            const query = 'SELECT * FROM users'
            const response = await connection.query(query)
            console.log(response)
            return res.status(200).json(response.rows)
        
        }
        catch(error){
            console.log(error)
            next(error)
        }
    }
}

export default usersController;