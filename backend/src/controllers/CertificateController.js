const axios = require('axios');
const Certificate = require('../models/CertificateSchema');

const mongoose = require('mongoose');

module.exports = {
async result(request, response){
        
    const {certid} = request.headers;
    
    const certificates = await Certificate.find();
    return response.json(certificates);
},

async search(request, response){
    
    const {certid} = request.headers;
    console.log(certid);           
    const certificate = await Certificate.findOne({certId: certid});
    return response.json(certificate);
},

async store(request, response) {

    
        
    const userid = request.headers.authorization;
    
    const { certId, student_name, course_name, conclusion_date } = request.body;
      
    const certificate = await Certificate.create({
           certId,
           student_name,
           course_name,
           conclusion_date,
    })
    return response.json(certificate);
    
}
};
