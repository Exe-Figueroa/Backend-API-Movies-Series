function postErrorHandler(req, res, next) {
  const { title, description, img, releaseYear, category } = req.body;
  if (!title || !description || !img || !releaseYear || !category) {
    res.status(400).json({error: 'Bad Reques'});
  }
  next();
}

module.exports = postErrorHandler;