const db = require("../models");
const jwt = require("jsonwebtoken");

exports.login = async function(req, res, next) {
    //Finding a user
    try {
        let user = await db.User.findOne({
            email: req.body.email
        });
        let { id } = user
        let isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
            let token = jwt.sign({
                id
            }, process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                token,
                message: 'You have successfully logged in!'
            });
        } else {
            return res.status(409).json({
                success: false,
                message: 'Check the form for errors.',
                errors: {
                    password: 'Invalid email or password.'
                }
            });
        }
    } catch(err) {
        return next({
            status: 400,
            message: err.message,
        })
    }
    //Checking if their password matches what was sent to the server
    // if it all matches
    // log them in
};

exports.signup = async function(req, res, next) {
    try {
        let user = await db.User.create(req.body);
        let { id } = user;
        let token = jwt.sign(
            {
                id
            }, 
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            token,
            message: 'You have successfully signed up!'
        });
    } catch(err) {
        if(err.code === 11000) {
            err.message = "Sorry, that email is already token";
            return res.status(409).json({
                success: false,
                message: 'Check the form for errors.',
                errors: {
                    email: 'This email is already taken.'
                }
            });
        }
        return next({
            status: 400,
            message: err.message,
        })
    }
};