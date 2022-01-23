const jwt = require('jsonwebtoken');

module.exports = {
    auth: (req, res, next) => {
        try {
            const decoded = jwt.verify(req.headers.token, 'secret');

            if (decoded) {
                req.user = decoded.user;
                next();
            }
            
        } catch (err) {
            res.status(401).json({
                message: 'Invalid Token'
            });
        };
    }
}