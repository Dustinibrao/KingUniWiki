// const bodyParser = require("body-parser");
const app = require("express")(); //was const app =
// const Cube = require("../models/Cube");
 const User = require("../models/User");
// const Accessory = require("../models/Accessory");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

module.exports = (app) => {
	app.get("/", (req, res) => {
		res.render("index");
	});
	app.get("/all-articles", (req, res) => {
		res.render("all-articles");
	});
	app.get("/article", (req, res) => {
		res.render("article");
	});
	app.get("/create", (req, res) => {
		res.render("create");
	});
	app.get("/index", (req, res) => {
		res.render("index");
	});
	app.get("/login", (req, res) => {
		res.render("login");
	});
	app.get("/register", (req, res) => {
		res.render("register");
	});
	app.get("/search-results", (req, res) => {
		res.render("search-results");
	});
};
