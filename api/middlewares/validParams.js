const validParams = (req, res, next) => {
  const { animes } = req.body;
  if (!animes || animes.length === 0) {
    return res.status(400).json({
      error: "No se han enviado los datos necesarios."
    });
  }
  next();
};

module.exports = validParams;