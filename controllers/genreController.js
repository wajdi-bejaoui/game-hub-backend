const Genre = require('../Models/Genre');

const { StatusCodes } = require('http-status-codes');



const createGenre = async (req, res) => {
  console.log(req.body)


  // req.body.user = req.user.id;
  const doc = await Genre.create(req.body);

  
  if (doc)
    return res.status(StatusCodes.CREATED).json({ count :doc.length , result : doc });
  else
    return res.status(StatusCodes.BAD_REQUEST).json({ msg : 'invalid data' });
  
};



const getAllGenres = async (req, res) => {
  const docs = await Genre.find({ })

  
  if (docs.length !== 0) {
    console.log("Genres")
    return res.status(StatusCodes.OK).json({ count : docs.length , results : docs });
  }
    
    
    // else 
    // return res.status(StatusCodes.OK).json({ count : Genres.length , results : Genres });
  else {
    console.log("No Genres")
    return res.status(StatusCodes.NOT_FOUND).json({ msg : 'there is no genres' });
  }
  


};


const updateGenre = async (req, res) => {
  const { id: genreId } = req.params;
  const { topic, question, situation } = req.body;

  const doc = await Question.findOne({ _id: genreId });

  if (!doc) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No Genre with id ${genreId}`});
  }

  // checkPermissions(req.user, review.user);

  doc.rating = topic;
  doc.title = question;
  doc.comment = situation;

  const updatedDoc = await doc.save();
  if (updatedDoc)
    return res.status(StatusCodes.OK).json({ updatedDoc });
  else
    return res.status(StatusCodes.BAD_REQUEST).json({ msg : 'invalid data' });
};

const deleteGenre = async (req, res) => {
  const { id: genreId } = req.params;

  const doc = await Genre.findOne({ _id: genreId });

  if (!doc) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: `No genre with id ${genreId}`});
  }

  // checkPermissions(req.user, review.user);
  try {
    console.log(doc)

    await doc.remove();
  }catch(error) {
    res.json({ error });
  }
  res.status(StatusCodes.OK).json({ msg: 'Success! genre removed' });
};

const getSingleGenre = async (req, res) => {
  const { id: genreId } = req.params;

  const doc = await Question.findOne({ _id: genreId });

  if (!doc) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No genre with id ${genreId}`});
  }

  res.status(StatusCodes.OK).json({ genre : doc });
};

module.exports = {
  createGenre,
  getAllGenres,
  updateGenre,
  deleteGenre,
  getSingleGenre,
};
