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

const cars = [
    {
        id: 1,
        model: "A3",
        image: "audi-a3.webp",
        description: "Premium compact car combining sportiness with practicality. Features advanced infotainment, comfortable interior, and a range of efficient petrol, diesel, and hybrid powertrains."
    },
    {
        id: 2,
        model: "A5",
        image: "audi-a5.webp",
        description: "Elegant mid-size coupe and sedan offering dynamic performance and sophisticated styling. The A5 blends luxury appointments with responsive handling and cutting-edge technology."
    },
    {
        id: 3,
        model: "A6 e-tron",
        image: "audi-a6-etron.webp",
        description: "Fully electric executive sedan combining premium comfort with zero-emission driving. Features impressive range, rapid charging, and Audi's advanced digital cockpit technology."
    },
    {
        id: 4,
        model: "A8",
        image: "audi-a8.webp",
        description: "Flagship luxury sedan representing the pinnacle of Audi craftsmanship. Equipped with state-of-the-art technology, superior comfort, and impressive performance capabilities."
    },
    {
        id: 5,
        model: "E-tron GT",
        image: "audi-etron-gt.webp",
        description: "High-performance electric coupe delivering supercar-level acceleration and luxury. The E-tron GT combines breathtaking speed with elegant design and premium interior appointments."
    },
    {
        id: 6,
        model: "Q2",
        image: "audi-q2.webp",
        description: "Compact luxury SUV with bold styling and versatile practicality. The Q2 combines SUV utility with car-like handling, making it ideal for modern urban adventures."
    },
    {
        id: 7,
        model: "Q3",
        image: "audi-q3.webp",
        description: "Compact SUV offering excellent visibility and easy maneuverability. Features a spacious cargo area, comfortable seating, and sophisticated technology for everyday journeys."
    },
    {
        id: 8,
        model: "Q5",
        image: "audi-q5.webp",
        description: "Mid-size luxury SUV renowned for its refined driving dynamics and premium interior. The Q5 offers versatility, powerful engines, and advanced driver assistance systems."
    },
    {
        id: 9,
        model: "Q6 e-tron",
        image: "audi-q6-etron.webp",
        description: "Premium electric SUV offering spacious interior and advanced connectivity. The Q6 e-tron delivers exceptional range, fast-charging capability, and sophisticated autonomous driving features."
    },
    {
        id: 10,
        model: "Q7",
        image: "audi-q7.webp",
        description: "Three-row luxury SUV designed for families seeking premium comfort and capability. Features spacious seating for seven, powerful powertrains, and comprehensive technology suite."
    },
    {
        id: 11,
        model: "Q8",
        image: "audi-q8.webp",
        description: "High-performance luxury coupe SUV with striking design and impressive power. The Q8 combines sportiness with elegance, offering an exhilarating driving experience."
    }
];

app.get('/cars', (req, res) => {
    //res.send('Cars Page');
    res.json(cars);
});

app.get('/cars/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) {
        return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
});


//

/**
* app.listen is a method in Express that starts the server and listens for incoming requests on the specified port. The callback function is executed once the server is successfully started, and it logs a message to the console indicating that the server is running and on which port it is listening.
*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});