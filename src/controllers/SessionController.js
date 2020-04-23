const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {

    async create(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(400).send('invalid email');

            const passwordValidation = await bcrypt.compare(password, user.password);
            if (!passwordValidation) return res.status(400).send('invalid password');

            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            res.header('auth', token).send(token);

            //return res.json({ _id: user._id, email: user.email });
        } catch (err) {
            return res.status(400).send(err);
        }        
    }

};