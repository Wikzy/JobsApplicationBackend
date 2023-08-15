const Job = require('../models/jobs')

exports.getAllJobs = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchAll()
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByID = async (req, res, next) => {
    try {
        const [job] = await Job.fetchByID(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job fetched successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCountry = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCountry(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCity = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCity(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCategory = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCategory(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.getJobByCompany = async (req, res, next) => {
    try {
        const [jobs] = await Job.fetchByCompany(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Jobs fetched successfully", data: jobs});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.createJob = async (req, res, next) => {
    try {
        const [job] = await Job.post(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job created successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.updateJob = async (req, res, next) => {
    try {
        const [job] = await Job.edit(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job updated successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.deleteJob = async (req, res, next) => {
    try {
        const [job] = await Job.delete(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Job deleted successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}

exports.statusJob = async (req, res, next) => {
    try {
        const [job] = await Job.status(req.body)
        res.status(200).json({ "responseCode": 200, "message": "Status changed successfully", data: job});
    } catch (error) {
        if (!error.statusCode){
            error.statusCode = 500
        }
        next(error)
    }
}