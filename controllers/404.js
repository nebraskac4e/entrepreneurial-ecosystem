/**
 * GET /404
 * 404 page.
 */
exports.get404 = (req, res) => {
  res.render('404', {
    title: '404'
  });
};
