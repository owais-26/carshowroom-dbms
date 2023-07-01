//  /api/new-message

//UTILS
import db from '../../utils/connectDB';

const handler = async (req, res) => {
  // Destructure the 'no' and 'text' properties from the request body
  const { no, text } = req.body;

  // Check if the HTTP method is POST
  if (req.method === "POST") {
    try {
      // Construct the INSERT query to insert values into the 'messages' table
      const query = `INSERT INTO messages VALUES (${no}, '${text}', ${no})`;

      // Execute the query using the database connection
      db.query(query, (error, result) => {
        if (error) {
          throw error; // Throw an error if the query execution fails
        } else {
          res.send({ status: "success", result }); // Send a success response with the result
        }
      });
    } catch (error) {
      console.log(error); // Log any caught errors
    }
  }
};


export default handler;