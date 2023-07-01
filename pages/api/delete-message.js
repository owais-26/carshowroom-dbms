//  /api/delete-message

//UTILS
import db from '../../utils/connectDB';

const handler = async (req, res) => {
  // Check if the HTTP method is POST
  if (req.method === "POST") {
    try {
      console.log(req.body); // Log the request body

      // Construct the DELETE query with the given ID
      const query = `DELETE FROM messages WHERE id = ${req.body};`;

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
