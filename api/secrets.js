require('dotenv').config();

module.exports = {
	jwtSecret: process.env.JWT_SECRET || "The water was deep"
}