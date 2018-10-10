var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Comment"
   }]
});

var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;

// Example of one Campground Create
// Campground.create({
//   name: "Salmon Creek", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg", description: "This is a huge Salmon Creek"},
//   function(err, campground){
//       if(err){
//           console.log(err);
//       } else {
//           console.log("NEWLY CREATER CAMPGROUND")
//           console.log(campground);
//       }
// });