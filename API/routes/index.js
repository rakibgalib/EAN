
const usersRoutes = require('./userRoutes');

const appRouter = (app) => {

  usersRoutes(app);
  
};

module.exports = appRouter;

