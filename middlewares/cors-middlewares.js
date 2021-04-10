const cors = (req, res, next) => {
    res.headers('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'POST, PUT, GET, DELETE, OPTIONS');
    return next();
  }
  
  module.exports = cors;