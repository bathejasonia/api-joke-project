import express from"express";
import axios from "axios";

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from /public (for CSS)
app.use(express.static('public'));


// Render the home page
app.get('/', (req, res) => {
  res.render('index.ejs'); // Renders views/index.ejs
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
