const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ANm2ib0zQjXLမစ္ဈိမပဋိပတာဝုဍ္ဎိပက္ခေZ5qMfCigp',
});

connection.connect((error) => {
    if (error) {
        console.log('Error connecting to the MySQL Database');
        return;
    }
    console.log('Connection established sucessfully');
});
connection.end((error) => {});