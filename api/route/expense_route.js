const express = require('express');
const expenseRoutes = express.Router();

// Require Post model in our routes module
let Expense = require('../model/expense_model');

// Defined store route
expenseRoutes.route('/save').post(function (req, res) {
  let post = new Expense(req.body);
  post.save()
    .then(() => {
      res.status(200).json({'expense': 'expense in added successfully'});
    })
    .catch((err) => {
      console.log(err)
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
expenseRoutes.route('/').get(function (req, res) {
  Expense.find(req.query,function(err, posts){
    if(err){
      res.json(err);
    }
    else {
      res.json(posts);
    }
  });
});



// // Defined edit route
// expenseRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Post.findById(id, function (err, post){
//       if(err) {
//         res.json(err);
//       }
//       res.json(post);
//   });
// });

// //  Defined update route
// expenseRoutes.route('/update/:id').post(function (req, res) {
//     Post.findById(req.params.id, function(err, post) {
//     if (!post)
//       res.status(404).send("data is not found");
//     else {
//         post.title = req.body.title;
//         post.body = req.body.body;
//         post.save().then(() => {
//           res.json('Update complete');
//       })
//       .catch(() => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// // Defined delete | remove | destroy route
// expenseRoutes.route('/delete/:id').delete(function (req, res) {
//     Post.findByIdAndRemove({_id: req.params.id}, function(err){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = expenseRoutes;