const Platform = require('../Models/Platform');

const { StatusCodes } = require('http-status-codes');



const createPlatform = async (req, res) => {
  console.log(req.body)


  // req.body.user = req.user.id;
  const doc = await Platform.create(req.body);

  
  if (doc)
    return res.status(StatusCodes.CREATED).json({ count :doc.length , result : doc });
  else
    return res.status(StatusCodes.BAD_REQUEST).json({ msg : 'invalid data' });
  
};



const getAllPlatforms = async (req, res) => {
  const docs = await Platform.find({ })

  
  if (docs.length !== 0) {
    console.log("Platforms")
    return res.status(StatusCodes.OK).json({ count : docs.length , results : docs });
  }
    
    
    // else 
    // return res.status(StatusCodes.OK).json({ count : Platforms.length , results : Platforms });
  else {
    console.log("No Platforms")
    return res.status(StatusCodes.NOT_FOUND).json({ msg : 'there is no Platforms' });
  }
  


};


const updatePlatform = async (req, res) => {
  const { id: PlatformId } = req.params;
  const { topic, question, situation } = req.body;

  const doc = await Question.findOne({ _id: PlatformId });

  if (!doc) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No Platform with id ${PlatformId}`});
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

const deletePlatform = async (req, res) => {
  const { id: PlatformId } = req.params;

  const doc = await Platform.findOne({ _id: PlatformId });

  if (!doc) {
    res.status(StatusCodes.NOT_FOUND).json({ msg: `No Platform with id ${PlatformId}`});
  }

  // checkPermissions(req.user, review.user);
  try {
    console.log(doc)

    await doc.remove();
  }catch(error) {
    res.json({ error });
  }
  res.status(StatusCodes.OK).json({ msg: 'Success! Platform removed' });
};

const getSinglePlatform = async (req, res) => {
  const { id: PlatformId } = req.params;

  const doc = await Question.findOne({ _id: PlatformId });

  if (!doc) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No Platform with id ${PlatformId}`});
  }

  res.status(StatusCodes.OK).json({ Platform : doc });
};

module.exports = {
  createPlatform,
  getAllPlatforms,
  updatePlatform,
  deletePlatform,
  getSinglePlatform,
};
