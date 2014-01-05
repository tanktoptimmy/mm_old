
/*
 * GET home page.
 */

var util = require('util');

exports.index = function(Match) {
  return function(req, res) {
    Match.find({}, function(error, matches) {
      res.render('index', {
        title: 'Express',
        matches : matches
      });
    });
  };
};

exports.addMatch = function(Match) {
  return function(req, res) {
    var match = new Match(req.body);
    match.save(function(error, match) {
      if (error || !match) {
        res.json({ error : error });
      } else {
        res.json({ match : match });
      }
    });
  };
};

exports.get = function(Match) {
  return function(req, res) {
    Match.find({}, function(error, matches) {
      res.json({ matches : matches });
    });
  }
};

exports.update = function(Match) {
  return function(req, res) {
    Match.findOne({ _id : req.params.id }, function(error, match) {
      if (error || !match) {
        res.json({ error : error });
      } else {
        match.done = req.body.done;
        match.save(function(error, match) {
          if (error || !match) {
            res.json({ error : error });
          } else {
            res.json({ match : match });
          }
        });
      }
    });
  }
};

exports.uploadImage = function(Image){
    return function(req,res,next){

      var image = new Image(req.body);
      var pathArray = req.files.image.path.split('/');
      image.url = pathArray[(pathArray.length - 1)];
      if (req.files.image.type != 'image/png'){
        res.redirect('back');
      }else{
        image.save(function(error, image) {
          if (error || !image) {
            res.json({ error : error });
          } else {
            res.json({ image : image });
          }
        });
        res.redirect('back');
      }
      
    };
};

// exports.uploadImage = function(req, res, next){
//         console.log('file info: ',req.files.image);
 
//         //split the url into an array and then get the last chunk and render it out in the send req.
//         var pathArray = req.files.image.path.split( '/' );
 
//         res.send(util.format(' Task Complete \n uploaded %s (%d Kb) to %s as %s with tags of %s'
//             , req.files.image.name
//             , req.files.image.size / 1024 | 0
//             , req.files.image.path
//             , req.body.title
//             , req.body.tag
//             //, req.files.image
//             , '<img src="uploads/' + pathArray[(pathArray.length - 1)] + '">'
//         ));
// };
