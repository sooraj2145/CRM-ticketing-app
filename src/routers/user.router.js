const express = require('express');
const router = express.Router();

const { insertUser } = require('../model/user/User.model');
const { hashPassword } = require('../helper/bcrypt.helper');

router.all('/', (req, res, next) => {
    next();
});

router.post('/', async (req, res) => {
    const { name, company, address, phone, email, password } = req.body;
    
    try {
        // Input validation
        if (!name || !company || !address || !phone || !email || !password) {
            return res.status(400).json({ 
                message: 'All fields are required' 
            });
        }

        // Email format validation (basic)
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                message: 'Please provide a valid email address' 
            });
        }

        // Password length validation
        if (password.length < 6) {
            return res.status(400).json({ 
                message: 'Password must be at least 6 characters long' 
            });
        }

        const hashedPassword = await hashPassword(password);

        const newUserObj = {
            name,
            company,
            address,
            phone,
            email,
            password: hashedPassword
        };

        const result = await insertUser(newUserObj);
        
        // Don't return sensitive data
        const { password: _, ...userResponse } = result.toObject();
        
        res.status(201).json({
            message: 'User created successfully',
            user: userResponse
        });

    } catch (error) {
        console.error('Error inserting user:', error.message);
        
        // Handle specific MongoDB errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(409).json({ 
                message: `${field} already exists` 
            });
        }
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ 
                message: error.message 
            });
        }
        
        return res.status(500).json({ 
            message: 'Internal Server Error' 
        });
    }
});

module.exports = router;
