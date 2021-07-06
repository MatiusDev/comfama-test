const getAverageScores = (req, res, next) => {
  try {
    const { animes } = req.body;
    const recommendedAnimes = animes.map(anime => {
      let recommendation = '';
      if (anime.score) {
        if (anime.score >= 1 && anime.score < 5) {
          recommendation = 'I do not recommend it.';
        } else if (anime.score >= 5 && anime.score < 8) {
          recommendation = 'You may have fun.';
        } else if (anime.score > 8) {
          recommendation = 'Great, this one of the best anime.';
        }
      }
      return { ...anime, recommendation };
    });
    res.json(recommendedAnimes);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAverageScores,
};