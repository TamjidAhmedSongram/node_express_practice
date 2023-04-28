import app from './config/express';



// Get the port from environment variables
const port = process.env.PORT || 3000;

// Start the server 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});