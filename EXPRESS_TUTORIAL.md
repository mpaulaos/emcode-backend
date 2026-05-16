# Express.js Backend Tutorial - Beginner Exercises

---

## PREREQUISITES

Before starting, make sure you have:
- Node.js installed (check by running `node --version` in your terminal)
- A code editor (VS Code recommended)
- Basic JavaScript knowledge
- A tool to test APIs (Postman or your browser)

---

## INITIAL SETUP

**Good news!** This project is already set up for you. Here's what's included:

- **Express**: Already installed - the main framework for building the server
- **Nodemon**: Already installed - automatically restarts the server when you make changes
- **CORS**: Already installed - helps with cross-origin requests (you'll learn about this later)

### Important Notes:

1. **Use the existing `server.js` file** for all exercises
   - You don't need to create `exercise1.js`, `exercise2.js`, etc.
   - Simply replace or add code to `server.js` for each exercise

2. **To run your server**, use this command:
   ```bash
   npm run dev
   ```
   This will start the server with nodemon, which means it will automatically restart whenever you save changes to your code.

3. **To stop the server**, press `Ctrl + C` in the terminal

---

# Exercise 1: Hello World Server

## WHAT YOU WILL LEARN
- How to create a basic Express server
- How to define a route
- How to start your server and listen for requests

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Open the server file
Open the existing `server.js` file in your project

### Step 2: Replace the code with the following
```javascript
// Import Express library
const express = require('express');

// Create an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3000;

// Create a route for the home page
// When someone visits http://localhost:3000/, this runs
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 3: Understanding the code

**Line by line explanation:**

- `const express = require('express');` - Brings Express into your project
- `const app = express();` - Creates your application
- `const PORT = 3000;` - Defines which port to use (like a door number for your server)
- `app.get('/', ...)` - Defines what happens when someone visits your homepage
  - `'/'` is the route (the URL path)
  - `(req, res) => {...}` is the function that handles the request
  - `req` = request (information coming from the user)
  - `res` = response (what you send back)
- `res.send('Hello World!')` - Sends "Hello World!" back to the user
- `app.listen(PORT, ...)` - Starts the server

### Step 4: Run your server
```bash
npm run dev
```

You should see: `Server is running on http://localhost:3000`

**Note**: Nodemon is now watching for changes. Any time you save the file, the server will automatically restart!

### Step 5: Test it!
- Open your browser
- Go to `http://localhost:3000`
- You should see "Hello World!" displayed

### SUCCESS CRITERIA
- Server starts without errors
- Browser displays "Hello World!"
- Console shows the server running message

### COMMON MISTAKES
- **Port already in use**: If you get an error, another program might be using port 3000. Change PORT to 3001 or 8000
- **Cannot find module 'express'**: Run `npm install express` again
- **Forgot to save the file**: Make sure to save before running!

---

# Exercise 2: Multiple Routes

## WHAT YOU WILL LEARN
- How to create multiple routes
- How to handle different URL paths
- How to create a 404 error page

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Update your server file
Open `server.js` and replace all the code with this:
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Home page route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to My Website</h1><p>This is the home page!</p>');
});

// About page route
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>We are learning Express.js!</p>');
});

// Contact page route
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>Email: hello@example.com</p>');
});

// Services page route
app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1><ul><li>Web Development</li><li>Mobile Apps</li><li>Consulting</li></ul>');
});

// 404 route - MUST be last!
// This catches any route that wasn't matched above
app.get('*', (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 2: Understanding what's new

- **Multiple `app.get()` calls** - Each one handles a different URL path
- **HTML in responses** - You can send HTML tags in your text
- **Order matters** - Routes are checked from top to bottom
- **`*` wildcard** - Matches any route that wasn't matched before
- **`res.status(404)`** - Sets the HTTP status code (404 = Not Found)
- **The 404 route must be last** - Otherwise it will catch everything!

### Step 3: Run your server
```bash
npm run dev
```

### Step 4: Test it!
Visit these URLs in your browser:
- `http://localhost:3000/` - Home page
- `http://localhost:3000/about` - About page
- `http://localhost:3000/contact` - Contact page
- `http://localhost:3000/services` - Services page
- `http://localhost:3000/random` - Should show 404 error

### SUCCESS CRITERIA
- Each route displays different content
- 404 page shows for non-existent routes
- HTML is properly displayed

### TRY THIS CHALLENGE
Add three more routes:
1. `/team` - Show information about your team
2. `/pricing` - Show pricing information
3. `/faq` - Show frequently asked questions

---

# Exercise 3: URL Parameters

## WHAT YOU WILL LEARN
- How to create dynamic routes
- How to capture values from the URL
- How to use `req.params`

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Update your server file
Open `server.js` and replace all the code with this:
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Simple home route
app.get('/', (req, res) => {
  res.send('<h1>URL Parameters Demo</h1><p>Try: /greet/YourName or /user/123</p>');
});

// Route with a name parameter
app.get('/greet/:name', (req, res) => {
  // req.params contains all URL parameters
  const name = req.params.name;
  res.send(`<h1>Hello, ${name}!</h1><p>Nice to meet you!</p>`);
});

// Route with an ID parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`<h1>User Profile</h1><p>Showing profile for user ID: ${userId}</p>`);
});

// Route with multiple parameters
app.get('/product/:category/:id', (req, res) => {
  const category = req.params.category;
  const productId = req.params.id;
  res.send(`<h1>Product Details</h1><p>Category: ${category}</p><p>Product ID: ${productId}</p>`);
});

// Math route - adding two numbers
app.get('/add/:num1/:num2', (req, res) => {
  // Parameters come as strings, so we convert them to numbers
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  const result = num1 + num2;
  
  res.send(`<h1>Calculator</h1><p>${num1} + ${num2} = ${result}</p>`);
});

// Calculator with operation
app.get('/calc/:operation/:num1/:num2', (req, res) => {
  const operation = req.params.operation;
  const num1 = Number(req.params.num1);
  const num2 = Number(req.params.num2);
  
  let result;
  
  // Perform different operations based on the parameter
  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'subtract') {
    result = num1 - num2;
  } else if (operation === 'multiply') {
    result = num1 * num2;
  } else if (operation === 'divide') {
    result = num1 / num2;
  } else {
    return res.send('<h1>Error</h1><p>Unknown operation. Use: add, subtract, multiply, or divide</p>');
  }
  
  res.send(`<h1>Calculator</h1><p>${num1} ${operation} ${num2} = ${result}</p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 2: Understanding URL Parameters

**What are URL parameters?**
- Parts of the URL that can change
- Defined with `:parameterName` in the route
- Accessed through `req.params.parameterName`

**Example:**
- Route: `/greet/:name`
- URL: `http://localhost:3000/greet/John`
- `req.params.name` will be `"John"`

**Important Notes:**
- URL parameters are always strings
- Use `Number()` to convert to numbers
- You can have multiple parameters in one route

### Step 3: Run your server
```bash
npm run dev
```

### Step 4: Test it!
Try these URLs:
- `http://localhost:3000/greet/Maria`
- `http://localhost:3000/user/42`
- `http://localhost:3000/product/electronics/12345`
- `http://localhost:3000/add/5/10`
- `http://localhost:3000/calc/multiply/6/7`

### SUCCESS CRITERIA
- Different names show different greetings
- Numbers are calculated correctly
- Multiple parameters work together

### TRY THIS CHALLENGE
Create these routes:
1. `/birthday/:name/:age` - Show "Happy Birthday [name], you are now [age] years old!"
2. `/book/:title/:author` - Show book information
3. `/subtract/:num1/:num2` - Subtract num2 from num1

---

# Exercise 4: Query Parameters

## WHAT YOU WILL LEARN
- The difference between URL parameters and query parameters
- How to use `req.query`
- How to handle optional parameters
- How to provide default values

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Update your server file
Open `server.js` and replace all the code with this:
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Home route with examples
app.get('/', (req, res) => {
  res.send(`
    <h1>Query Parameters Demo</h1>
    <p>Try these URLs:</p>
    <ul>
      <li><a href="/search?q=javascript">Search for "javascript"</a></li>
      <li><a href="/search?q=nodejs&category=tutorial">Search with category</a></li>
      <li><a href="/greet?name=John&age=25">Greet with name and age</a></li>
      <li><a href="/filter?minPrice=100&maxPrice=500">Filter by price</a></li>
    </ul>
  `);
});

// Search route
app.get('/search', (req, res) => {
  // req.query contains all query parameters
  const searchTerm = req.query.q;
  const category = req.query.category;
  
  let response = `<h1>Search Results</h1>`;
  response += `<p>You searched for: <strong>${searchTerm || 'nothing'}</strong></p>`;
  
  if (category) {
    response += `<p>Category: <strong>${category}</strong></p>`;
  }
  
  res.send(response);
});

// Greeting with query parameters
app.get('/greet', (req, res) => {
  // Get query parameters with default values
  const name = req.query.name || 'Guest';
  const age = req.query.age || 'unknown';
  
  res.send(`
    <h1>Hello, ${name}!</h1>
    <p>Age: ${age}</p>
    <p><small>URL: ${req.url}</small></p>
  `);
});

// Product filter with multiple parameters
app.get('/products', (req, res) => {
  const category = req.query.category || 'all';
  const minPrice = req.query.minPrice || 0;
  const maxPrice = req.query.maxPrice || 'unlimited';
  const sortBy = req.query.sortBy || 'name';
  
  res.send(`
    <h1>Product Listing</h1>
    <ul>
      <li>Category: ${category}</li>
      <li>Min Price: $${minPrice}</li>
      <li>Max Price: $${maxPrice}</li>
      <li>Sort By: ${sortBy}</li>
    </ul>
    <p><a href="/">Back to Home</a></p>
  `);
});

// Filter route
app.get('/filter', (req, res) => {
  // Get all query parameters
  const params = req.query;
  
  // Convert query object to readable format
  const paramsList = Object.keys(params).map(key => {
    return `<li><strong>${key}:</strong> ${params[key]}</li>`;
  }).join('');
  
  res.send(`
    <h1>Filter Applied</h1>
    <ul>${paramsList || '<li>No filters applied</li>'}</ul>
    <p><small>Full query object: ${JSON.stringify(params)}</small></p>
  `);
});

// API-style response (JSON)
app.get('/api/user', (req, res) => {
  const userId = req.query.id;
  const format = req.query.format || 'json';
  
  // Create a sample user object
  const user = {
    id: userId || '001',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active'
  };
  
  if (format === 'json') {
    // Send JSON response
    res.json(user);
  } else {
    // Send HTML response
    res.send(`
      <h1>User Information</h1>
      <p>ID: ${user.id}</p>
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Status: ${user.status}</p>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 2: Understanding Query Parameters

**What are Query Parameters?**
- Optional values added to URLs after a `?` symbol
- Format: `?key1=value1&key2=value2`
- Multiple parameters separated by `&`
- All accessed through `req.query`

**Comparison:**

| Feature | URL Parameters | Query Parameters |
|---------|---------------|------------------|
| Syntax | `/user/:id` | `/user?id=123` |
| Required | Yes (part of route) | No (optional) |
| Access | `req.params.id` | `req.query.id` |
| Example | `/user/123` | `/user?id=123&name=John` |

**Default Values:**
```javascript
const name = req.query.name || 'Default Value';
```

### Step 3: Run your server
```bash
npm run dev
```

### Step 4: Test it!
Try these URLs:
- `http://localhost:3000/`
- `http://localhost:3000/search?q=express`
- `http://localhost:3000/search?q=nodejs&category=backend`
- `http://localhost:3000/greet?name=Maria&age=30`
- `http://localhost:3000/products?category=electronics&minPrice=50&maxPrice=200`
- `http://localhost:3000/api/user?id=42&format=json`

### SUCCESS CRITERIA
- Query parameters are displayed correctly
- Default values work when parameters are missing
- Multiple query parameters work together
- JSON responses work properly

### TRY THIS CHALLENGE
Create a `/weather` route that accepts:
- `city` (default: "Unknown")
- `units` (default: "celsius")
- `days` (default: "7")

Display all three values in a nice format.

---

# Exercise 5: Static File Server

## WHAT YOU WILL LEARN
- How to serve HTML, CSS, JavaScript, and image files
- How to use `express.static()` middleware
- How to organize your project with a public folder
- What middleware is and how it works

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Create folder structure
Create these folders and files:
```
your-project/
  ├── server.js (already exists - you'll edit this)
  └── public/
      ├── index.html
      ├── about.html
      ├── style.css
      └── images/
          └── logo.png (optional)
```

### Step 2: Update the server file
Open `server.js` and replace the code with:

```javascript
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// MIDDLEWARE: Serve static files from the 'public' folder
// This makes all files in 'public' accessible via URLs
app.use(express.static('public'));

// You can also specify the path more explicitly:
// app.use(express.static(path.join(__dirname, 'public')));

// API route (this still works alongside static files)
app.get('/api/info', (req, res) => {
  res.json({
    message: 'This is an API endpoint',
    timestamp: new Date(),
    staticFiles: 'served from /public folder'
  });
});

// This route will only work if there's no index.html in public folder
app.get('/custom', (req, res) => {
  res.send('<h1>Custom Route</h1><p>This is not a static file!</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Static files served from 'public' folder`);
});
```

### Step 3: Create index.html
Create `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Express App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Welcome to My Express Website</h1>
    <nav>
      <a href="/">Home</a>
      <a href="about.html">About</a>
      <a href="/custom">Custom Route</a>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>This is a Static HTML Page</h2>
      <p>This page is served from the 'public' folder using Express static middleware.</p>
      
      <h3>How it works:</h3>
      <ul>
        <li>Files in 'public' folder are accessible directly</li>
        <li>CSS file is linked automatically</li>
        <li>No need to create routes for each file</li>
      </ul>
      
      <button onclick="fetchData()">Fetch API Data</button>
      <div id="result"></div>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 Express Learning Project</p>
  </footer>
  
  <script>
    // JavaScript that runs in the browser
    async function fetchData() {
      try {
        const response = await fetch('/api/info');
        const data = await response.json();
        document.getElementById('result').innerHTML = `
          <h3>API Response:</h3>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    console.log('Page loaded successfully!');
  </script>
</body>
</html>
```

### Step 4: Create style.css
Create `public/style.css`:

```css
/* Reset and base styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

/* Header styles */
header {
  background-color: white;
  padding: 2rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

header h1 {
  color: #667eea;
  margin-bottom: 1rem;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  color: #667eea;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #f0f0f0;
}

/* Main content */
main {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

section {
  margin-bottom: 2rem;
}

h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

h3 {
  color: #764ba2;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

ul {
  margin-left: 2rem;
  margin-top: 0.5rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Button styles */
button {
  background-color: #667eea;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #764ba2;
}

/* Result display */
#result {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  border-left: 4px solid #667eea;
}

pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  font-size: 0.9rem;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem;
  color: white;
  margin-top: 2rem;
}
```

### Step 5: Create about.html
Create `public/about.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About - My Express App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>About This Project</h1>
    <nav>
      <a href="/">Home</a>
      <a href="about.html">About</a>
      <a href="/custom">Custom Route</a>
    </nav>
  </header>
  
  <main>
    <section>
      <h2>What is Express.js?</h2>
      <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
      
      <h3>What We're Learning:</h3>
      <ul>
        <li>Serving static files (HTML, CSS, JS, images)</li>
        <li>Using middleware</li>
        <li>Creating API endpoints</li>
        <li>Organizing project structure</li>
      </ul>
      
      <h3>Project Structure:</h3>
      <pre>
project/
  ├── exercise5.js      (Server file)
  └── public/           (Static files folder)
      ├── index.html
      ├── about.html
      ├── style.css
      └── images/
      </pre>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2026 Express Learning Project</p>
  </footer>
</body>
</html>
```

### Step 6: Understanding the code

**What is Middleware?**
- Functions that have access to request and response objects
- Execute in order (top to bottom)
- Can modify request/response or end the request-response cycle
- `express.static()` is built-in middleware

**How `express.static()` works:**
```javascript
app.use(express.static('public'));
```
- Serves files from the 'public' folder
- Files are accessible at root URL
- Example: `public/style.css` → `http://localhost:3000/style.css`

**File Access:**
- `public/index.html` → `http://localhost:3000/` or `http://localhost:3000/index.html`
- `public/about.html` → `http://localhost:3000/about.html`
- `public/style.css` → `http://localhost:3000/style.css`

### Step 7: Run your server
```bash
npm run dev
```

### Step 8: Test it!
- Open `http://localhost:3000/`
- Check that CSS is applied (page has colors and styles)
- Click "About" link
- Click "Fetch API Data" button
- Try accessing `http://localhost:3000/custom`

### SUCCESS CRITERIA
- HTML pages load correctly
- CSS styles are applied
- Navigation between pages works
- API endpoint returns JSON
- Button fetches and displays data

### COMMON MISTAKES
- **CSS not loading**: Check that the path in `<link>` tag is correct
- **404 for static files**: Make sure files are in the 'public' folder
- **index.html not showing**: Check folder structure
- **Path issues**: Use `path.join(__dirname, 'public')` for absolute paths

### TRY THIS CHALLENGE
1. Add a `contact.html` page
2. Create a `script.js` file in the public folder
3. Add an images folder and display an image
4. Create a form that submits to your custom route

---

# Exercise 6: Simple Contact Form (POST Request)

## WHAT YOU WILL LEARN
- How to handle POST requests
- How to receive form data
- How to use `express.json()` and `express.urlencoded()` middleware
- How to access form data from `req.body`

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Create folder structure
```
your-project/
  ├── server.js (already exists - you'll edit this)
  └── public/
      ├── contact.html
      └── style.css (from previous exercise)
```

### Step 2: Update the server file
Open `server.js` and replace the code with:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// MIDDLEWARE: Parse incoming data
// This middleware processes form data and makes it available in req.body

// 1. Parse JSON data (for API requests)
app.use(express.json());

// 2. Parse URL-encoded data (for HTML form submissions)
app.use(express.urlencoded({ extended: true }));

// 3. Serve static files
app.use(express.static('public'));

// Store submitted forms in memory (will reset when server restarts)
const submissions = [];

// GET route: Show all submissions
app.get('/api/submissions', (req, res) => {
  res.json({
    count: submissions.length,
    submissions: submissions
  });
});

// POST route: Handle form submission
app.post('/submit-form', (req, res) => {
  // req.body contains the form data
  console.log('Form received:', req.body);
  
  // Extract form fields
  const { name, email, message } = req.body;
  
  // Validate: Check if all fields are filled
  if (!name || !email || !message) {
    return res.status(400).send(`
      <h1>Error!</h1>
      <p>All fields are required.</p>
      <a href="/contact.html">Go back</a>
    `);
  }
  
  // Validate email format (simple check)
  if (!email.includes('@')) {
    return res.status(400).send(`
      <h1>Error!</h1>
      <p>Please enter a valid email address.</p>
      <a href="/contact.html">Go back</a>
    `);
  }
  
  // Create submission object
  const submission = {
    id: submissions.length + 1,
    name: name,
    email: email,
    message: message,
    timestamp: new Date().toISOString()
  };
  
  // Save to our array
  submissions.push(submission);
  
  // Send success response
  res.send(`
    <h1>Thank You!</h1>
    <p>Your message has been received, ${name}!</p>
    <h3>Submission Details:</h3>
    <ul>
      <li><strong>Name:</strong> ${name}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong> ${message}</li>
      <li><strong>Submitted at:</strong> ${new Date().toLocaleString()}</li>
    </ul>
    <p><a href="/contact.html">Submit another message</a></p>
    <p><a href="/api/submissions">View all submissions</a></p>
  `);
});

// POST route: Handle JSON API requests
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }
  
  // Create submission
  const submission = {
    id: submissions.length + 1,
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };
  
  submissions.push(submission);
  
  // Send JSON response
  res.status(201).json({
    success: true,
    message: 'Form submitted successfully',
    data: submission
  });
});

// DELETE route: Clear all submissions (bonus feature)
app.delete('/api/submissions', (req, res) => {
  const count = submissions.length;
  submissions.length = 0; // Clear the array
  
  res.json({
    success: true,
    message: `Deleted ${count} submissions`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 3: Create the HTML form
Create `public/contact.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form</title>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Additional styles for the form */
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 500px;
      margin: 2rem auto;
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
    }
    
    label {
      font-weight: bold;
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    input, textarea {
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      font-family: inherit;
      transition: border-color 0.3s;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: #667eea;
    }
    
    textarea {
      min-height: 150px;
      resize: vertical;
    }
    
    button[type="submit"] {
      background-color: #667eea;
      color: white;
      padding: 1rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    button[type="submit"]:hover {
      background-color: #764ba2;
    }
    
    .required {
      color: red;
    }
    
    .api-section {
      margin-top: 3rem;
      padding: 2rem;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    
    #api-result {
      margin-top: 1rem;
      padding: 1rem;
      background-color: white;
      border-radius: 5px;
      border-left: 4px solid #667eea;
    }
  </style>
</head>
<body>
  <div style="max-width: 800px; margin: 0 auto; padding: 2rem;">
    <h1>Contact Us</h1>
    
    <h2>Method 1: HTML Form Submission</h2>
    <form action="/submit-form" method="POST">
      <div class="form-group">
        <label for="name">Name <span class="required">*</span></label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          placeholder="Enter your name">
      </div>
      
      <div class="form-group">
        <label for="email">Email <span class="required">*</span></label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="your.email@example.com">
      </div>
      
      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea 
          id="message" 
          name="message" 
          required 
          placeholder="Type your message here..."></textarea>
      </div>
      
      <button type="submit">Submit Form</button>
    </form>
    
    <div class="api-section">
      <h2>Method 2: JavaScript Fetch (API)</h2>
      <p>This method sends data using JavaScript without refreshing the page.</p>
      
      <button onclick="submitViaAPI()">Submit Test Data via API</button>
      <button onclick="viewSubmissions()">View All Submissions</button>
      <button onclick="clearSubmissions()">Clear All Submissions</button>
      
      <div id="api-result"></div>
    </div>
  </div>
  
  <script>
    // Submit form using JavaScript fetch API
    async function submitViaAPI() {
      const data = {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message sent via JavaScript!'
      };
      
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        document.getElementById('api-result').innerHTML = `
          <h3>Response:</h3>
          <pre>${JSON.stringify(result, null, 2)}</pre>
        `;
      } catch (error) {
        document.getElementById('api-result').innerHTML = `
          <h3>Error:</h3>
          <p>${error.message}</p>
        `;
      }
    }
    
    // View all submissions
    async function viewSubmissions() {
      try {
        const response = await fetch('/api/submissions');
        const data = await response.json();
        
        document.getElementById('api-result').innerHTML = `
          <h3>All Submissions (${data.count}):</h3>
          <pre>${JSON.stringify(data.submissions, null, 2)}</pre>
        `;
      } catch (error) {
        document.getElementById('api-result').innerHTML = `
          <h3>Error:</h3>
          <p>${error.message}</p>
        `;
      }
    }
    
    // Clear all submissions
    async function clearSubmissions() {
      try {
        const response = await fetch('/api/submissions', {
          method: 'DELETE'
        });
        
        const data = await response.json();
        
        document.getElementById('api-result').innerHTML = `
          <h3>Success:</h3>
          <p>${data.message}</p>
        `;
      } catch (error) {
        document.getElementById('api-result').innerHTML = `
          <h3>Error:</h3>
          <p>${error.message}</p>
        `;
      }
    }
  </script>
</body>
</html>
```

### Step 4: Understanding POST requests

**HTTP Methods:**
- **GET**: Request data (retrieve)
- **POST**: Send data (create)
- **PUT**: Update data
- **DELETE**: Remove data

**Form Submission Flow:**
1. User fills form and clicks submit
2. Browser sends POST request with form data
3. Express receives request
4. Middleware parses the data into `req.body`
5. Your route handler processes the data
6. Server sends response back

**req.body:**
```javascript
// Example form data:
{
  name: "John Doe",
  email: "john@example.com",
  message: "Hello!"
}
```

**Middleware Explained:**
- `express.json()` - Parses JSON data (Content-Type: application/json)
- `express.urlencoded()` - Parses form data (Content-Type: application/x-www-form-urlencoded)

### Step 5: Run your server
```bash
npm run dev
```

### Step 6: Test it!

**Test HTML Form:**
1. Go to `http://localhost:3000/contact.html`
2. Fill out the form
3. Click "Submit Form"
4. You should see a success message

**Test API:**
1. Click "Submit Test Data via API"
2. Click "View All Submissions"
3. Click "Clear All Submissions"

**Test with Postman (if available):**
- Send POST request to `http://localhost:3000/api/contact`
- Set Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "name": "API Test",
  "email": "api@test.com",
  "message": "Testing from Postman"
}
```

### SUCCESS CRITERIA
- Form submits successfully
- Data is visible in the success message
- Validation works (try submitting empty form)
- API submission works
- All submissions are viewable
- Data persists until server restart

### COMMON MISTAKES
- **req.body is undefined**: Forgot to add middleware
- **Form refreshes page**: That's normal for HTML forms (not JavaScript)
- **Validation not working**: Check if middleware is before routes
- **CORS errors**: If testing from different domain, you'll need CORS middleware

### TRY THIS CHALLENGE
1. Add a phone number field to the form
2. Add validation for phone number
3. Add a "subject" dropdown with options
4. Save submissions to a JSON file instead of memory
5. Add a field to track how many times the user has submitted

---

# Exercise 7: In-Memory Data Store

## WHAT YOU WILL LEARN
- How to store data in memory
- How to implement CRUD operations (Create, Read, Update, Delete)
- How to generate unique IDs
- How to work with arrays of objects
- How to filter and find data

## STEP-BY-STEP INSTRUCTIONS

### Step 1: Update the server file
Open `server.js` and replace the code with:

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// In-memory data store: Array of tasks
let tasks = [
  { id: 1, title: 'Learn Express', completed: false, createdAt: new Date() },
  { id: 2, title: 'Build an API', completed: false, createdAt: new Date() },
  { id: 3, title: 'Master Node.js', completed: true, createdAt: new Date() }
];

// Counter for generating unique IDs
let nextId = 4;

// ===== READ Operations =====

// GET all tasks
app.get('/api/tasks', (req, res) => {
  // Optional filtering by completion status
  const { completed } = req.query;
  
  let filteredTasks = tasks;
  
  if (completed !== undefined) {
    // Convert string to boolean
    const isCompleted = completed === 'true';
    filteredTasks = tasks.filter(task => task.completed === isCompleted);
  }
  
  res.json({
    success: true,
    count: filteredTasks.length,
    tasks: filteredTasks
  });
});

// GET single task by ID
app.get('/api/tasks/:id', (req, res) => {
  // Convert string ID to number
  const taskId = parseInt(req.params.id);
  
  // Find the task
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({
      success: false,
      error: 'Task not found'
    });
  }
  
  res.json({
    success: true,
    task: task
  });
});

// ===== CREATE Operation =====

// POST create new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  
  // Validation
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Title is required'
    });
  }
  
  // Create new task object
  const newTask = {
    id: nextId++,
    title: title.trim(),
    completed: false,
    createdAt: new Date()
  };
  
  // Add to tasks array
  tasks.push(newTask);
  
  // Return created task with 201 status (Created)
  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    task: newTask
  });
});

// ===== UPDATE Operations =====

// PUT update entire task
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, completed } = req.body;
  
  // Find task index
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Task not found'
    });
  }
  
  // Validation
  if (!title || title.trim() === '') {
    return res.status(400).json({
      success: false,
      error: 'Title is required'
    });
  }
  
  // Update task (keep ID and createdAt)
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title: title.trim(),
    completed: completed !== undefined ? completed : tasks[taskIndex].completed,
    updatedAt: new Date()
  };
  
  res.json({
    success: true,
    message: 'Task updated successfully',
    task: tasks[taskIndex]
  });
});

// PATCH partially update task (toggle completion)
app.patch('/api/tasks/:id/toggle', (req, res) => {
  const taskId = parseInt(req.params.id);
  
  const task = tasks.find(t => t.id === taskId);
  
  if (!task) {
    return res.status(404).json({
      success: false,
      error: 'Task not found'
    });
  }
  
  // Toggle completed status
  task.completed = !task.completed;
  task.updatedAt = new Date();
  
  res.json({
    success: true,
    message: `Task marked as ${task.completed ? 'completed' : 'incomplete'}`,
    task: task
  });
});

// ===== DELETE Operation =====

// DELETE task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  
  const taskIndex = tasks.findIndex(t => t.id === taskId);
  
  if (taskIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Task not found'
    });
  }
  
  // Remove task from array
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  
  res.json({
    success: true,
    message: 'Task deleted successfully',
    task: deletedTask
  });
});

// ===== Additional Features =====

// DELETE all completed tasks
app.delete('/api/tasks/completed/all', (req, res) => {
  const initialCount = tasks.length;
  tasks = tasks.filter(task => !task.completed);
  const deletedCount = initialCount - tasks.length;
  
  res.json({
    success: true,
    message: `Deleted ${deletedCount} completed tasks`,
    remaining: tasks.length
  });
});

// GET statistics
app.get('/api/stats', (req, res) => {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const incomplete = total - completed;
  
  res.json({
    success: true,
    stats: {
      total,
      completed,
      incomplete,
      completionRate: total > 0 ? ((completed / total) * 100).toFixed(2) + '%' : '0%'
    }
  });
});

// Home route with documentation
app.get('/', (req, res) => {
  res.send(`
    <h1>Task Management API</h1>
    <p>In-Memory Data Store Exercise</p>
    
    <h2>Available Endpoints:</h2>
    <ul>
      <li><strong>GET</strong> /api/tasks - Get all tasks</li>
      <li><strong>GET</strong> /api/tasks?completed=true - Get completed tasks</li>
      <li><strong>GET</strong> /api/tasks/:id - Get specific task</li>
      <li><strong>POST</strong> /api/tasks - Create new task</li>
      <li><strong>PUT</strong> /api/tasks/:id - Update task</li>
      <li><strong>PATCH</strong> /api/tasks/:id/toggle - Toggle completion</li>
      <li><strong>DELETE</strong> /api/tasks/:id - Delete task</li>
      <li><strong>DELETE</strong> /api/tasks/completed/all - Delete all completed</li>
      <li><strong>GET</strong> /api/stats - Get statistics</li>
    </ul>
    
    <h2>Quick Links:</h2>
    <ul>
      <li><a href="/api/tasks">View All Tasks</a></li>
      <li><a href="/api/stats">View Statistics</a></li>
      <li><a href="/tasks.html">Task Manager UI</a></li>
    </ul>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Tasks in memory: ${tasks.length}`);
});
```

### Step 2: Create the UI
Create `public/tasks.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background-color: white;
      border-radius: 10px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #667eea;
      margin-bottom: 1rem;
      text-align: center;
    }
    
    .stats {
      display: flex;
      justify-content: space-around;
      margin-bottom: 2rem;
      padding: 1rem;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    
    .stat {
      text-align: center;
    }
    
    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #667eea;
    }
    
    .stat-label {
      color: #666;
      font-size: 0.9rem;
    }
    
    .add-task {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    
    input {
      flex: 1;
      padding: 0.75rem;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
    }
    
    input:focus {
      outline: none;
      border-color: #667eea;
    }
    
    button {
      padding: 0.75rem 1.5rem;
      background-color: #667eea;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;
    }
    
    button:hover {
      background-color: #764ba2;
    }
    
    .filter-buttons {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .filter-buttons button {
      flex: 1;
      padding: 0.5rem;
      font-size: 0.9rem;
    }
    
    .filter-buttons button.active {
      background-color: #764ba2;
    }
    
    .tasks {
      list-style: none;
    }
    
    .task {
      display: flex;
      align-items: center;
      padding: 1rem;
      margin-bottom: 0.5rem;
      background-color: #f9f9f9;
      border-radius: 5px;
      border-left: 4px solid #667eea;
      transition: all 0.3s;
    }
    
    .task.completed {
      border-left-color: #4caf50;
      opacity: 0.7;
    }
    
    .task.completed .task-title {
      text-decoration: line-through;
      color: #999;
    }
    
    .task-checkbox {
      width: 20px;
      height: 20px;
      margin-right: 1rem;
      cursor: pointer;
    }
    
    .task-title {
      flex: 1;
      font-size: 1rem;
    }
    
    .task-actions {
      display: flex;
      gap: 0.5rem;
    }
    
    .btn-delete {
      background-color: #f44336;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
    }
    
    .btn-delete:hover {
      background-color: #da190b;
    }
    
    .btn-clear {
      background-color: #ff9800;
      width: 100%;
      margin-top: 1rem;
    }
    
    .btn-clear:hover {
      background-color: #e68900;
    }
    
    .empty-state {
      text-align: center;
      padding: 3rem;
      color: #999;
    }
    
    .timestamp {
      font-size: 0.8rem;
      color: #999;
      margin-right: 1rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Task Manager</h1>
    
    <div class="stats" id="stats">
      <div class="stat">
        <div class="stat-value" id="total-tasks">0</div>
        <div class="stat-label">Total</div>
      </div>
      <div class="stat">
        <div class="stat-value" id="completed-tasks">0</div>
        <div class="stat-label">Completed</div>
      </div>
      <div class="stat">
        <div class="stat-value" id="incomplete-tasks">0</div>
        <div class="stat-label">To Do</div>
      </div>
    </div>
    
    <div class="add-task">
      <input 
        type="text" 
        id="task-input" 
        placeholder="Add a new task..."
        onkeypress="if(event.key==='Enter') addTask()">
      <button onclick="addTask()">Add Task</button>
    </div>
    
    <div class="filter-buttons">
      <button class="active" onclick="filterTasks('all')">All</button>
      <button onclick="filterTasks('active')">Active</button>
      <button onclick="filterTasks('completed')">Completed</button>
    </div>
    
    <ul class="tasks" id="task-list"></ul>
    
    <button class="btn-clear" onclick="clearCompleted()">Clear Completed Tasks</button>
  </div>
  
  <script>
    let currentFilter = 'all';
    
    // Load tasks when page loads
    document.addEventListener('DOMContentLoaded', () => {
      loadTasks();
      loadStats();
    });
    
    // Fetch and display all tasks
    async function loadTasks() {
      try {
        let url = '/api/tasks';
        
        if (currentFilter === 'active') {
          url += '?completed=false';
        } else if (currentFilter === 'completed') {
          url += '?completed=true';
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        displayTasks(data.tasks);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
    
    // Display tasks in the UI
    function displayTasks(tasks) {
      const taskList = document.getElementById('task-list');
      
      if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No tasks found. Add one above!</div>';
        return;
      }
      
      taskList.innerHTML = tasks.map(task => `
        <li class="task ${task.completed ? 'completed' : ''}">
          <input 
            type="checkbox" 
            class="task-checkbox" 
            ${task.completed ? 'checked' : ''}
            onchange="toggleTask(${task.id})">
          <span class="task-title">${task.title}</span>
          <span class="timestamp">#${task.id}</span>
          <div class="task-actions">
            <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
          </div>
        </li>
      `).join('');
    }
    
    // Load statistics
    async function loadStats() {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        
        document.getElementById('total-tasks').textContent = data.stats.total;
        document.getElementById('completed-tasks').textContent = data.stats.completed;
        document.getElementById('incomplete-tasks').textContent = data.stats.incomplete;
      } catch (error) {
        console.error('Error loading stats:', error);
      }
    }
    
    // Add new task
    async function addTask() {
      const input = document.getElementById('task-input');
      const title = input.value.trim();
      
      if (!title) {
        alert('Please enter a task title');
        return;
      }
      
      try {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title })
        });
        
        const data = await response.json();
        
        if (data.success) {
          input.value = '';
          loadTasks();
          loadStats();
        } else {
          alert('Error: ' + data.error);
        }
      } catch (error) {
        console.error('Error adding task:', error);
        alert('Failed to add task');
      }
    }
    
    // Toggle task completion
    async function toggleTask(id) {
      try {
        const response = await fetch(`/api/tasks/${id}/toggle`, {
          method: 'PATCH'
        });
        
        const data = await response.json();
        
        if (data.success) {
          loadTasks();
          loadStats();
        }
      } catch (error) {
        console.error('Error toggling task:', error);
      }
    }
    
    // Delete task
    async function deleteTask(id) {
      if (!confirm('Are you sure you want to delete this task?')) {
        return;
      }
      
      try {
        const response = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (data.success) {
          loadTasks();
          loadStats();
        }
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
    
    // Filter tasks
    function filterTasks(filter) {
      currentFilter = filter;
      
      // Update active button
      document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
      
      loadTasks();
    }
    
    // Clear completed tasks
    async function clearCompleted() {
      if (!confirm('Delete all completed tasks?')) {
        return;
      }
      
      try {
        const response = await fetch('/api/tasks/completed/all', {
          method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (data.success) {
          alert(data.message);
          loadTasks();
          loadStats();
        }
      } catch (error) {
        console.error('Error clearing completed tasks:', error);
      }
    }
  </script>
</body>
</html>
```

### Step 3: Understanding the code

**Data Storage:**
```javascript
let tasks = [
  { id: 1, title: 'Learn Express', completed: false }
];
```
- Array holds all our tasks
- Each task is an object with properties
- Data exists only in memory (resets on server restart)

**CRUD Operations:**

| Operation | HTTP Method | Endpoint | Purpose |
|-----------|-------------|----------|---------|
| **C**reate | POST | `/api/tasks` | Add new task |
| **R**ead All | GET | `/api/tasks` | Get all tasks |
| **R**ead One | GET | `/api/tasks/:id` | Get specific task |
| **U**pdate | PUT | `/api/tasks/:id` | Update task |
| **D**elete | DELETE | `/api/tasks/:id` | Remove task |

**Array Methods Used:**
- `find()` - Find one item
- `findIndex()` - Find position of item
- `filter()` - Get items matching condition
- `push()` - Add item to end
- `splice()` - Remove item from array

**ID Generation:**
```javascript
let nextId = 4;
const newTask = { id: nextId++, ... };
// nextId increments after each use
```

### Step 4: Run your server
```bash
npm run dev
```

### Step 5: Test it!

**Using the UI:**
1. Go to `http://localhost:3000/tasks.html`
2. Add tasks
3. Check/uncheck to mark complete
4. Delete tasks
5. Filter by status
6. Clear completed tasks

**Using API directly:**
- `http://localhost:3000/api/tasks` - View all tasks
- `http://localhost:3000/api/stats` - View statistics

**Using Postman or similar:**
```
POST http://localhost:3000/api/tasks
Body: { "title": "New task" }

GET http://localhost:3000/api/tasks

DELETE http://localhost:3000/api/tasks/1
```

### SUCCESS CRITERIA
- Can create, read, update, and delete tasks
- Filtering works correctly
- Statistics update in real-time
- Data persists during server lifetime
- All API endpoints return proper JSON

### IMPORTANT CONCEPTS

**Why "In-Memory"?**
- Data stored in JavaScript variables
- Fast access
- Lost when server restarts
- Good for learning, not production

**Next Steps (Future Exercises):**
- Save to JSON file (persistent storage)
- Connect to real database (MongoDB, PostgreSQL)
- Add user authentication
- Add task categories

### TRY THIS CHALLENGE
1. Add a `priority` field (low, medium, high)
2. Add a `dueDate` field
3. Sort tasks by creation date
4. Add search functionality
5. Add ability to edit task title
6. Add task categories or tags
7. Count tasks per category

---

# CONGRATULATIONS!

You've completed the first 7 Express.js exercises! You now know how to:

[COMPLETED] Create an Express server
[COMPLETED] Handle multiple routes
[COMPLETED] Work with URL and query parameters
[COMPLETED] Serve static files
[COMPLETED] Handle form submissions and POST requests
[COMPLETED] Implement CRUD operations
[COMPLETED] Manage data in memory  

## Next Steps

1. **Practice**: Rebuild these exercises from scratch without looking
2. **Experiment**: Modify the code and see what happens
3. **Combine**: Mix features from different exercises
4. **Move Forward**: Try exercises 8-10 from the main list
5. **Build**: Create your own project using what you've learned

## Common Debugging Tips

- **Server won't start**: Check if port is already in use
- **Cannot GET /route**: Check route spelling and method (GET vs POST)
- **req.body undefined**: Make sure middleware is added
- **Changes not showing**: Restart server after code changes
- **Check terminal**: Most errors show up in the terminal where server runs

## Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Node.js Documentation](https://nodejs.org/docs/)

## Need Help?

- Read error messages carefully
- Console.log() is your friend
- Check your middleware order
- Test one thing at a time
- Ask questions!

Happy coding!
