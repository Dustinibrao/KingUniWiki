//const User = require("User");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = Schema({
	title: String, // unique, min 5 characters
	description: String, // min 20 characters
	articleAuthor: String, // a User (ObjectId)
	creationDate: String, // a User (ObjectId)
});

const WikiArticle = mongoose.model("WikiArticle", articleSchema);

module.exports = WikiArticle;
