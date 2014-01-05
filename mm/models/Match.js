var Mongoose = require('mongoose');

exports.MatchSchema = new Mongoose.Schema({
  matchName         : { type : String, required: 'Match name is required!' },
  homeMatch         : { type : Boolean, required: 'Please choose whether home match!'},
  description       : { type : String, required : 'Description is required!' },
  datePlayed        : { type : String, required : 'Date played is required!' },
  // homeFlag          : { type : String, required : 'Home flag is required!' },
  // awayFlag          : { type : String, required : 'Away flag is required!' },
  // goalieShirt       : { type : String, required : 'Goalie shirt is required!' },
  // outfieldShirt     : { type : String, required : 'Outfield shirt is required!' },
  formation         : { type: String, required: 'Formation is required!'}//,
  // goalie            : { type: String, required: 'Goalie name is required!'},
  // player2           : { type: String, required: 'Player 2 name is required!'},
  // player3           : { type: String, required: 'Player 3 name is required!'},
  // player4           : { type: String, required: 'Player 4 name is required!'},
  // player5           : { type: String, required: 'Player 5 name is required!'},
  // player6           : { type: String, required: 'Player 6 name is required!'},
  // player7           : { type: String, required: 'Player 7 name is required!'},
  // player8           : { type: String, required: 'Player 8 name is required!'},
  // player9           : { type: String, required: 'Player 9 name is required!'},
  // player10          : { type: String, required: 'Player 10 name is required!'},
  // player11          : { type: String, required: 'Player 11 name is required!'},
  // createdBy         : { type: String, required: 'Creator required!' }
});