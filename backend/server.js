const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.get('/api/users', (req, res) => {
	// Get users logic here
	const users = [
		{ id: 1, name: 'John Doe' },
		{ id: 2, name: 'Jane Smith' },
	];
	res.json(users);
});

app.post('/api/users', (req, res) => {
	// Create user logic here
	const newUser = req.body;
	// Save the user to the database or perform other operations
	res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
	// Update user logic here
	const userId = req.params.id;
	const updatedUser = req.body;
	// Update the user in the database or perform other operations
	res.json(updatedUser);
});

app.delete('/api/users/:id', (req, res) => {
	// Delete user logic here
	const userId = req.params.id;
	// Delete the user from the database or perform other operations
	res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});