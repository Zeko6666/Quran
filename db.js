const mysql = require('mysql');

const pool = mysql.createConnection({
  // connectionLimit:10,
  host: "localhost",
  user: "root",
  // port:"3306",
  password:"",
  database:'quran',

});

// pool.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
pool.connect((err)=>{
  if(err) throw err ; 
  console.log("database connected...");
})
module.exports = pool;
