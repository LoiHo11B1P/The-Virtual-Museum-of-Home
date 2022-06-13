const router = require('express').Router()
const res = require('express/lib/response')
const db = require('../models')

router.post('/', (req, res) => {
    res.json(req.body)
    db.Exhibit.create(req.body)
        .catch( err => {
            if(err && err.name == 'ValidationError'){
                let message = ''
                for(var field in err.errors){
                    message += `${err.errors[field].message}`
                }
                console.log('--Validation Error Message--', message)
            }
        })
})
{/*
router.post('/exhibit', (req, res) => {
    res.json(req.body)
    db.Exhibit.create(req.body)
        .catch( err => {
            if(err && err.name == 'ValidationError'){
                let message = ''
                for(var field in err.errors){
                    message += `${err.errors[field].message}`
                }
                console.log('--Validation Error Message--', message)
            }
        })
})
*/}
router.get('/:id', (req, res) => {
    db.Exhibit.findById(req.params.id)
        .then(exhibit => res.json(exhibit))
        .catch( err => {
            if(err && err.name == 'ValidationError'){
                let message = ''
                for(var field in err.errors){
                    message += `${err.errors[field].message}`
                }
                console.log('--Validation Error Message--', message)
            }
        })
})

router.get('/', (req, res) => {
    db.Exhibit.find()
        .then(exhibits => res.json(exhibits))
        .catch( err => {
            if(err && err.name == 'ValidationError'){
                let message = ''
                for(var field in err.errors){
                    message += `${err.errors[field].message}`
                }
                console.log('--Validation Error Message--', message)
            }
        })
})




module.exports = router