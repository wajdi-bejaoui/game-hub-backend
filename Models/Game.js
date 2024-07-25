const mongoose = require('mongoose');
const platformSchema = require('./Platform').schema;

const GameSchema = mongoose.Schema(
    {
      id: {
        type: Number,
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
            maxlength: 300,
          },
          released: {
            type: String,
            trim: true,
            // required: [true, 'Please provide topic'],
            maxlength: 100,
          },
          metacritic: {
            type: Number,
            required: [true, 'Please provide metacritic'],
            maxlength: 100,
          },
          
          background_image: {
            type: String,
            required: [true, 'Please provide background_image'],
          },
          parent_platforms: {
            type: [platformSchema],
            required: true,
          },
          // genre_slug: {
          //   type: mongoose.Schema.ObjectId,
          //   ref: 'Genre',
          //   required: true,
          // },
          genre_slug :{
            type: String,
            required: [true, 'Please provide genre_slug'],
          },
    },
    { timestamps: true }
    
)


module.exports = mongoose.model('Game', GameSchema);