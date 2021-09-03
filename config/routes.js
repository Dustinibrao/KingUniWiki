const bodyParser = require("body-parser");
const app = require("express")(); //was const app =
const User = require("../models/User");
const Article = require("../models/Article");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

module.exports = (app) => {
	app.get("/", (req, res) => {
		Article.find(function (err, articles) {
			console.log(articles);
			if (err) return console.log(err);
			res.render("index", { articles });
		});
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
	app.post("/create", (req, res) => {
		const newArticle = new Article(req.body);
		console.log(newArticle);
		newArticle.save(function (err, newArticle) {
			if (err) return console.error(err);
			console.log("article was saved");
		});
		res.redirect(301, "/");
	});
	app.get("/index", (req, res) => {
		res.render("index");
	});
	app.get("/login", (req, res) => {
		res.render("login");
	});
	app.post("/login", async (req, res) => {
		console.log("logging in ", req.body);
		let myUser = await User.findOne({ username: req.body.username }).exec();
		console.log(myUser);
		bcrypt.compare(req.body.password, myUser.password, function (err, res) {
			console.log(res);
		});
		const token = jwt.sign({ id: User._id }, "Big Secret", {
			expiresIn: "2d",
		});
		console.log(token);
		res.cookie("token", token);
		res.redirect(301, "/");
	});
	app.get("/register", (req, res) => {
		res.render("register");
	});
	app.post("/register", async function (req, res) {
		const salt = 6;
		await bcrypt.hash(req.body.password, salt, function (err, hash) {
			const newUser = new User({
				username: req.body.username,
				password: hash,
			});
			console.log(newUser);
			newUser.save(function (err, newUser) {
				if (err) return console.log(err);
				console.log("User saved");
				res.redirect("login");
			});
		});
	});
	app.get("/search-results", (req, res) => {
		res.render("search-results");
	});
};
