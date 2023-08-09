const express = require('express')
const companyController = require('../controllers/company')

const router = express.Router();

router.get('/companies/all',  companyController.getAllCompanies);
router.get('/companies/:get', companyController.getCompanyByID);
router.post('/companies/create', companyController.createCompany);
router.put('/companies/status', companyController.statusCompany);
router.put('/companies/:update', companyController.updateCompany);
router.delete('/companies/:delete', companyController.deleteCompany);

module.exports = router;
