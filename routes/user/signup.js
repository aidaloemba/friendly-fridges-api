const express = require('express');
const app = express();
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.get('/', (req, res) => {
    let data = {}
    res.json('signup', data)
});

app.post('/', (req, res, next) => {
    
    let email = req.body.email;
    let password = req.body.password;

    if(email === '' || password === ''){
        res.json('signup', {
            errorMessage: 'All fields are required to signup.'
        });
        return;
    }

    User.findOne({email})
        .then((user)=>{

            if(user){
                res.json({
                    errorMessage: 'Email already exists, please choose another one.'
                });    
            } else {
                
                bcrypt.hash(password, saltRounds, function (err, hash) {

                    if(!err){
                        User.create({
                            firstname: req.body.firstname,
                            lastname: req.body.lastname,
                            postcode: req.body.postcode,
                            email: req.body.email,
                            password: hash,
                        })
                        .catch((err) => {
                            console.log('Error', err);
                        });
                    } else {
                        errorMessage: 'An error occured while creating your account. Please try again later.';
                    }

                });
            }

        })
        .catch((err)=>{
            next(err);
        })
});

module.exports = app;