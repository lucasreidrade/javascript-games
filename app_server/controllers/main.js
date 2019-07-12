
/* GET home page. */
module.exports.index = function(req,res,next){
  res.render('index', { title: 'Javascript Games' });
} 

/* GET home page. */
module.exports.ttt_hard = function(req,res,next){
  res.render('ttt_hard', { title: 'Tic Tac Toe' });
} 
module.exports.ttt = function(req,res,next){
  res.render('ttt_menu', { title: 'Tic Tac Toe' });
} 
module.exports.ttt2 = function(req,res,next){
  res.render('ttt2', { title: 'Tic Tac Toe Squared' });
} 
