const mongoose = require('mongoose');

const PlatformSchema = mongoose.Schema(
    {
      id: {
        type:Number,
        required: [true, 'Please provide id'],
        maxlength: 100,
      },
        name: {
            type: String,
            trim: true,
            required: [true, 'Please provide name'],
            maxlength: 100,
          },
          slug: {
            type: String,
            trim: true,
            required: [true, 'Please provide slug'],
            maxlength: 100,
          }
          
          
    },
    
)

module.exports = mongoose.model('Platform', PlatformSchema);

// {
//   id : 1,
//   name : "PC",
//   slug : "pc"
// }
// {
//   id : 1,
//   name : "PlayStation",
//   slug : "playstation"
// }
// {
//   id : 1,
//   name : "Xbox",
//   slug : "xbox"
// }