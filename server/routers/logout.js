let express = require('express');
let router = express.Router();

// ----------------------------------------
// Route for /logout
// ----------------------------------------

const onLogout = async (req, res) => {
  req.logout();
  req.session.passport.user = null;
  req.session.sessionId = null;
  res.status(200).send();
};

router.get('/', onLogout);

module.exports = router;
