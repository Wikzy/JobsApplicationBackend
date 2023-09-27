const express = require('express')
const dashboardController = require('../controllers/dashboard')

const router = express.Router();

router.get('/api/dashboard/dashboard', dashboardController.getDashboard);
router.get('/api/dashboard/pieChart', dashboardController.getPieChart);
router.get('/api/dashboard/lineChart', dashboardController.getLineChart);
router.get('/api/dashboard/barChart', dashboardController.getBarChart);
router.get('/api/dashboard/transactions', dashboardController.getDashboardTransactions);
router.get('/api/dashboard/reports', dashboardController.getDashboardReports);

module.exports = router;
