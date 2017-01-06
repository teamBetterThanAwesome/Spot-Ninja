function ensureLoggedIn(req, res, next) {
  console.log(req.signed.cookies);
  if (req.signedCookies.user_id) {
    next();
  } else {
    res.status(401);
    next(new Error('Un-authorized'));
  }
}

module.exports = {
  ensureLoggedIn
};
