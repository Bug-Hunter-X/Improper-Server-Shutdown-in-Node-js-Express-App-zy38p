# Improper Server Shutdown in Node.js

This repository demonstrates a common issue in Node.js Express applications: improper handling of server shutdown.  The original code (`server.js`) uses `server.close()` directly without properly handling pending asynchronous operations, which can result in incomplete responses or errors.  The solution (`serverSolution.js`) provides an improved approach using the `process.on('SIGINT', ...)` event listener to gracefully shut down the server, ensuring all pending requests are handled before termination.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install express` to install the necessary dependencies.
3. Execute `node server.js` to start the server. Observe the output.
4. Try interrupting the server with Ctrl+C. Observe the server shutdown behavior (this will highlight the original bug).
5. Execute `node serverSolution.js` and interrupt the server with Ctrl+C again. Observe the improvement in the shutdown process.

## Solution Explanation

The `serverSolution.js` file demonstrates the correct way to gracefully shut down a Node.js Express server. By using the `process.on('SIGINT', ...)` event listener, the application can respond to termination signals (like Ctrl+C) and handle the server closure in a controlled manner, giving the server time to handle any ongoing request before exiting.