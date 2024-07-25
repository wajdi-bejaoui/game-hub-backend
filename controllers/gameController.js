const Game = require('../Models/Game');

const { StatusCodes } = require('http-status-codes');



const createGame = async (req, res) => {
  console.log(req.body)


  // req.body.user = req.user.id;
  const doc = await Game.create(req.body);
  if (doc)
    return res.status(StatusCodes.CREATED).json({ doc });
  else
    return res.status(StatusCodes.BAD_REQUEST).json({ msg : 'invalid data' });
  
};



const getAllGames = async (req, res) => {
  const genre = req.query.genre;
  const platform = req.query.platform;
  console.log(genre)
  console.log(platform)
  

  if (platform) {
    const games = await Game.find({ 'parent_platforms.slug': platform });

    if (games.length !== 0) {
      return res.status(StatusCodes.OK).json({ count : games.length , results : games });
    }
    else
    return res.status(StatusCodes.OK).json({ count : games.length , results : [] });
  }
  

  if (genre) {
    const games = await Game.find({ genre_slug: genre });

    if (games.length !== 0) {
      return res.status(StatusCodes.OK).json({ count : games.length , results : games });
    }
    else
    return res.status(StatusCodes.OK).json({ count : games.length , results : [] });
  }

  const docs = await Game.find({ })
  // .populate({
  //   path: 'platform',
  //   // select: 'id name slug',
  // });
  
  
  if (docs.length !== 0) {
    return res.status(StatusCodes.OK).json({ count : docs.length , results : docs });
  }

  else
    return res.status(StatusCodes.NOT_FOUND).json({ msg : 'there is no games' });


};


const updateGame = async (req, res) => {
  const { id: gameId } = req.params;
  const { topic, question, situation } = req.body;

  const doc = await Question.findOne({ _id: gameId });

  if (!doc) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No game with id ${gameId}`});
  }

  // checkPermissions(req.user, review.user);

  doc.rating = topic;
  doc.title = question;
  doc.comment = situation;

  const gameUpdated = await doc.save();
  if (gameUpdated)
    return res.status(StatusCodes.OK).json({ gameUpdated });
  else
    return res.status(StatusCodes.BAD_REQUEST).json({ msg : 'invalid data' });
};

const deleteGame = async (req, res) => {
  const { id: gameId } = req.params;

  const doc = await Game.findOne({ _id: gameId });

  if (!doc) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: `No game with id ${gameId}`});
  }

  // checkPermissions(req.user, review.user);
  try {
    console.log(doc)

    await doc.remove();
  }catch(error) {
    res.json({ error });
  }
  res.status(StatusCodes.OK).json({ msg: 'Success! Game removed' });
};

const getSingleGame = async (req, res) => {
  const { id: gameId } = req.params;

  const doc = await Question.findOne({ _id: gameId });

  if (!doc) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No question with id ${gameId}`});
  }

  res.status(StatusCodes.OK).json({ game : doc });
};

module.exports = {
  createGame,
  getAllGames,
  updateGame,
  deleteGame,
  getSingleGame,
};
