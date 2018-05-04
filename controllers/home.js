const Resource = require('../models/Resource');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {

  Resource.find({}, (function(err, resourceResult) {
     if (err) {
         res.send(err);
     } else if (resourceResult.length) {
       res.render('home', {
         title: 'Home',
         resources: resourceResult,
         google_map_api_key: process.env.GOOGLE_MAP_API_KEY
       });
     } else {
         res.send('No resources found');
     }
   }));
};
