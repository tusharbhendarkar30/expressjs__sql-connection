const mysql2 =require('mysql2')
const pool = mysql2.createPool({

    host:'localhost',
    user:'root',
    password:'root123',
    database:'tushar',
    waitForConnections:true,
	port:3306
	
})

module.exports =pool 