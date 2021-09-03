//const Article = require("Article");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
	username: String, //unique
	password: String,
	createdArticles: [{
		type: Schema.Types.ObjectId,
		ref: "Article"

	}], // a collection of articles
});

const WikiUser = mongoose.model("WikiUser", userSchema);

module.exports = WikiUser;
