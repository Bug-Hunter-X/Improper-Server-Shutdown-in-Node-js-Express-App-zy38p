const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello from Node.js!');
  }, 5000); // 5-second delay
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Handle server shutdown gracefully
process.on('SIGINT', () => {
  console.log('Shutting down...');
  server.close(() => {
    console.log('Server closed!');
    process.exit(0);
  });
});
// Handle other termination signals (e.g., SIGTERM)
process.on('SIGTERM', () => {
    console.log('Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed!');
        process.exit(0);
    });
});