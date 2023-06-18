import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import $ from "jquery";

import Top_window from "components/Top_window";
import Timeline_box from "components/Timeline_box";

// const axios = require("axios");
// const cheerio = require("cheerio");


export default function PageMenu() {
	// $(document).ready(function() {
	// 	// Go to the dev.to tags page and get the HTML code
	// 	$.get("https://www.restauraceveranda.com/pondeli", (html) => {
	// 		// Find elements with crayons-tag class inside the HTML page received
	// 		[...$(html).find("span")].forEach((el) => {
	// 			// Get the text(tag name) inside of each element with crayons-tag class
	// 			const text = $(el).html();
	// 			// Append each tag to a list
	// 			$("#hohoho").append("<li>"+text+"</li>");
	// 		})
	// 	})
	// });

	return (
		<div id="hohoho">
			Hello
		</div>
	);
}

// const fetchTitles = async () => {
// 	try {
// 		// Go to the dev.to tags page
// 		const response = await axios.get("https://dev.to/tags");
//
// 		// Get the HTML code of the webpage
// 		const html = response.data;
// 		const $ = cheerio.load(html);
//
// 		// Create tags array to store tags
// 		const tags = [];
//
// 		// Find all elements with crayons-tag class, find their innerText and add them to the tags array
// 		$("a.crayons-tag").each((_idx, el) => tags.push($(el).text()));
//
// 		return tags;
// 	} catch (error) {
// 		throw error;
// 	}
// };
//
// // Print all tags in the console
// fetchTitles().then(titles => console.log(titles));