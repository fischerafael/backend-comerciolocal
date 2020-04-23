const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {
        
    async create(req, res) {
        const { email } = req.body;
        let { password } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).send('User already exists');

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        try {
            const user = await User.create({
                email,
                password
            });
            return res.json(user.email);
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async read(req, res) {
        try {
            const users = await User.find();

            return res.json(users);
        } catch (err) {
            res.status(400).send(err);
        }
    }

};