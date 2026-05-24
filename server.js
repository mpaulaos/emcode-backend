/* *
* This file is the entry point of the application. It sets up the Express server and listens on a specified port.It imports the Express app from the 'src/app.js' file and starts the server.
 */
/* require is a built-in function in Node.js that is used to import modules, JSON, and local files. In this case, it is used to import the Express app from the 'src/app.js' file. */
const app = require('./src/app');
const PORT = 3000;

/* *
 * ROUTES
 * A route is a way to define how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, etc.). Each route can have one or more handler functions, which are executed when the route is matched. The handler functions can perform various operations such as processing the request data, interacting with databases, and sending responses back to the client.
 */
// Example route
/* req and res are the request and response objects in Express. The req object contains information about the HTTP request, such as the request parameters, body, headers, etc. The res object is used to send a response back to the client. In this example, when a GET request is made to the root URL ('/'), the server responds with the string 'Express JS'. */
app.get('/', (req, res) => {
    // res.send is a method in Express that sends a response back to the client. In this case, it sends the string 'Express JS' as the response when a GET request is made to the root URL ('/').
    res.send('Express JS');
});

//
app.get('/about', (req, res) => {
    res.send('About Page');
});


//

/**
* app.listen is a method in Express that starts the server and listens for incoming requests on the specified port. The callback function is executed once the server is successfully started, and it logs a message to the console indicating that the server is running and on which port it is listening.
*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});