const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    certId: {type: String, required: true, unique: true},
    student_name: String,
    course_name: String,
    conclusion_date: String,
    });

    module.exports = mongoose.model('Certificate', CertificateSchema);