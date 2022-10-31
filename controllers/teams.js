// const League = require('../models/league');

// module.exports = {
//     create
// }

// function create (req, res) {
//     League.findById(req.params.id, function(err, league) {
//         league.teams.push(req.body);
//         league.save(function(err) {
//             console.log(err);
//             res.redirect(`/leagues/${league._id}`);
//         });
//     });
// }