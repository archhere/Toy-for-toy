const AuthenticationController = require('./controllers/authentication'),
      express = require('express'),
      passportService = require('./config/passport'),
      passport = require('passport'),
      UtilController = require('./controllers/util');
      const path = require('path');
      const ToyController = require("./controllers/toy");
      // Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });
const REQUIRE_ADMIN = 'Admin',
      REQUIRE_MEMBER = 'Member';



module.exports = function(app) {

  const apiRoutes = express.Router();
  const authRoutes = express.Router();


  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);
  app.use('/api', apiRoutes);

  app.post('/api/toys', ToyController.addToy);
  app.get('/api/toys', ToyController.getToys);
  app.get('/api/toys/:toyId', ToyController.getToy);
  app.patch('/api/toys/:toyId', ToyController.editToy);
  app.delete('/api/toys/:toyId', ToyController.deleteToy);


  apiRoutes.get('/users', UtilController.getUsers);
};


// http://localhost:3000/api/auth/login
// http://localhost:3000/api/auth/register
