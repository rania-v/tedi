const passport = require('passport');
const utils = require("../auth/utils");

const {invalidToken} = require("../models/token");

// Authenticate user
const authenticateUser = async (req, res, next) => {
  const middleware = passport.authenticate('jwt', { session: false }, async(err, user, info) => {
    if(err !== null || user === false || user === null) {
      return next(info.message);
    }

    // Get user's token
    const currentToken = utils.extractToken(req);
    // console.log(currentToken);

    // Check if it is an invalid token
    const token = await invalidToken.findOne({ value: currentToken }).exec();

    // If the token is valid, continue
    if(token === null) {
      return next();
    }
    res.status(400).json({ message: 'Σφάλμα κατά τον έλεγχο ταυτότητας του χρήστη.' });
  });

  middleware(req, res, next);
}

module.exports = authenticateUser;
