const Resource = require('../models/Resource');

/**
 * GET /admin
 * Read all resources.
 */
exports.getAdmin = (req, res) => {
  // go to login if not logged in
  if (!req.user || !req.user.email === 'nebraskac4e@gmail.com') {
    return res.redirect('404');
  }

  Resource.find({}, (function(err, resourceResult) {
     if (err) {
         res.send(err);
     } else if (resourceResult.length) {
         res.render('admin', {
           title: 'Admin',
           'resources': resourceResult
         });
     } else {
         res.send('No resources found.');
     }
   }));
};

/**
 * POST /admin
 * Update a resource
 */
exports.updateAdmin = (req, res) => {
  var rowData = req.body || '{}';

  Resource.update(
    { name: rowData[0].name },
    { $set: {
      name: rowData[0].name,
      latitude: rowData[0].latitude,
      longitude: rowData[0].longitude,
      grouping: rowData[0].grouping,
      description: rowData[0].description,
      displayOnMap: true,
      displayOnList: true
      }
    },
    { upsert: true },
    function (err, doc) { // callback
      if (err) {
        console.log(err);
      } else {
        console.log("No err on update.");
      }
    }
  );
};

/**
 * POST /admin/delete
 * Delete a resource
 */
 exports.deleteAdmin = (req, res) => {
   var rowData = req.body || '{}';

   Resource.find({ "name" : rowData[0] }).remove(
     function (err, doc) { // callback
       if (err) {
         console.log(err);
       } else {
         console.log("No err on delete.");
       }
     }
   );
 };
