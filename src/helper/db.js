// import mysql from "mysql2";

// // Create the connection to database
// // const connection = mysql.createConnection({
// //   host: "localhost",
// //   user: "root",
// //   password: "",
// //   database: "treatglobe",
// // });
// // Create a pool with a Keep-Alive mechanism
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "treatglobe",
//   waitForConnections: true,
//   connectionLimit: 10, // Maximum number of connections in the pool
//   queueLimit: 0, // Unlimited queueing
//   connectTimeout: 10000, // Optional: 10 seconds connection timeout
// });
// // Function to periodically ping the database to keep the connections alive
// function keepConnectionAlive() {
//   pool.getConnection((err, connection) => {
//     if (err) {
//       console.error("Error in getting connection for keep-alive:", err);
//       return;
//     }
//     // Ping the database to keep the connection alive
//     connection.ping((pingError) => {
//       if (pingError) {
//         console.error("Error in pinging the database:", pingError);
//       }
//       connection.release(); // Always release the connection back to the pool
//     });
//   });
// }

// // Set an interval to run the keep-alive function every 15 minutes
// setInterval(keepConnectionAlive, 900000); // 900000 ms = 15 minutes

// export default pool.promise();
// // export default connection;



import mysql from "mysql2/promise";

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "treatglobe",
  waitForConnections: true, // Enables queueing of requests when connections are exhausted
  connectionLimit: 10,      // Maximum number of connections in the pool
  queueLimit: 0,            // No limit on the number of queued connection requests
  connectTimeout: 10000,    // 10 seconds timeout for acquiring a connection
});

// Function to periodically ping the database to keep connections alive
async function keepConnectionAlive() {
  try {
    const connection = await pool.getConnection(); // Get a connection from the pool
    await connection.ping();                      // Ping the database
    console.log("Database connection is alive.");
    connection.release();                         // Release the connection back to the pool
  } catch (err) {
    console.error("Error in keep-alive process:", err.message);
  }
}

// Set an interval to run the keep-alive function every 15 minutes
setInterval(keepConnectionAlive, 15 * 60 * 1000); // 15 minutes

// Export the pool for use in async/await
export default pool;
