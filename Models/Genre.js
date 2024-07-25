const mongoose = require('mongoose');

const GenreSchema = mongoose.Schema(
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
              background_image: {
                type: String,
                // required: [true, 'Please provide background_image'],
              },
              game_count: {
                type: Number,
                // required: [true, 'Please provide game_count'],
                maxlength: 100,
              },
          
    },
    
)


module.exports = mongoose.model('Genre', GenreSchema);