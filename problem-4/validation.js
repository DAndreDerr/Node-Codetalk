// here we import the check function from the express-validtor module
// the "check function is used to define the validation rules for specific fields in incoming HTTP re"
const { check } = require('express-validator');
// here we have our arrays that check conditionals held in the array 
exports.signupValidation = [
   check('name', 'Name is requied').not().isEmpty(),
   check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
   check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
exports.loginValidation = [
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]

