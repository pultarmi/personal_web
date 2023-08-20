const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require("puppeteer");

const app = express();
const PORT = 3030;

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
	res.send('Hello, World!');
});


async function tutorial() {
	try {
		// Specify the URL of the dev.to tags web page
		const URL = "https://www.restauraceveranda.com/pondeli";

		// Launch the headless browser
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		// Go to the webpage
		await page.goto(URL);

		// Perform a function within the given webpage context
		const data = await page.evaluate(() => {
			results = [];

			// Select all elements with crayons-tag class
			const items = document.querySelectorAll("#comp-jynb1a0n > p span:only-child");
			items.forEach(item => {
				// Get innerText of each element selected and add it to the array
				results.push(item.innerText);
			});
			results = results.filter(str => /\S/.test(str));
			results = results.filter((value, index) => results.indexOf(value) === index);
			return results;
		});

		const d = new Date();
		let day = d.getDay();

		// Print the result and close the browser
		await browser.close();
		return data;
	} catch (error) {
		console.error(error);
	}
}

// tutorial();

app.get('/api/menu/jaguska', async (req, res) => {
	const puppeteer = require("puppeteer");

	data = await tutorial();

	console.log(data);
	res.set('Access-Control-Allow-Origin', '*');
	res.json(data);
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