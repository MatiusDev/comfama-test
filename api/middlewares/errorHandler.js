const errorHandler = (error, req, res, next) => {
  console.log(error);
  res.status(500).end();
};

module.exports = errorHandler;