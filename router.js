const AuthenticationController = require('./controllers/authentication'),
      express = require('express'),
      passportService = require('./config/passport'),
      passport = require('passport'),
      UtilController = require('./controllers/util');
      const path = require('path');
      const ToyController = require("./controllers/toy");
      const LeaseController = require('./controllers/lease');
      // Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });
const REQUIRE_ADMIN = 'Admin',
      REQUIRE_MEMBER = 'Member';



module.exports = function(app) {

  const apiRoutes = express.Router();
  const authRoutes = express.Router();

// ------------------------------------------------------------------------
// User Routes
// http://localhost:3000/api/auth/login
// http://localhost:3000/api/auth/register
// ------------------------------------------------------------------------

  apiRoutes.use('/auth', authRoutes);
  authRoutes.post('/register', AuthenticationController.register);
  authRoutes.post('/login', requireLogin, AuthenticationController.login);
  app.use('/api', apiRoutes);
  apiRoutes.get('/users', UtilController.getUsers);

  // ------------------------------------------------------------------------
  // Toy Routes
  // http://localhost:3000/api/toys
  // http://localhost:3000/api/toys/toyId
  // --------------------------------------------------------------------

  app.post('/api/toys', ToyController.addToy);
  app.get('/api/toys', ToyController.getToys);
  app.get('/api/toys/:toyId', ToyController.getToy);
  app.patch('/api/toys/:toyId', ToyController.editToy);
  app.delete('/api/toys/:toyId', ToyController.deleteToy);

  // ------------------------------------------------------------------------
  // Lease Routes
  // http://localhost:3000/api/toys/toyId/lease
  // http://localhost:3000/api/toys/toyId/lease/leaseId
  // --------------------------------------------------------------------

  app.post('/api/toys/:toyId/lease', LeaseController.addLease);
  app.get('/api/toys/:toyId/lease', LeaseController.getAllLease);
  app.get('/api/toys/:toyId/lease/:leaseId', LeaseController.getOneLease);
  app.patch('/api/toys/:toyId/lease/:leaseId', LeaseController.editLease);
  app.delete('/api/toys/:toyId/lease/:leaseId', LeaseController.deleteLease);

};
