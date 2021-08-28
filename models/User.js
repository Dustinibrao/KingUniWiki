const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
	name: String,
	description: String,
	imageUrl: String,
	difficultyLevel: Number,
	// accessories: [{ type: Schema.Types.ObjectId, ref: "Accessory" }],
	// creatorId: { type: Schema.Types.ObjectId, ref: "User" },
});

const WikiUser = mongoose.model("WikiUser", userSchema);

module.exports = WikiUser;
