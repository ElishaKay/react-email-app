// For saving LinkedIn Receivers from LinkedIn-Chrome Extension

const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
	companyName: String,
	employeeCountRange: String,
	companyDescription: String,
	industries: Array,
	liCompanyId: Number,
	companyUrl: String
});

mongoose.model('companies', companySchema);