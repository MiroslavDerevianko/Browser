var express = require('express')
var fetch = require('node-fetch')
var urlapi = require('url')
var urlencode = require('urlencode');

var router = express.Router();
/* GET users listing. */
/*router.post('/getIssue', function(req, res, next) {

  var url = urlapi.parse(req.body.issueUrl)
  var urlres = 'https://api.github.com' + url.pathname;
  urlIssue = req.body.issueUrl;

   //console.log(urlres)
  fetch(urlres)
    .then(function (response) {
      return response.json()
      .then(function (dat) {
      var check = {
            notnull:true,
            gh_found:true
       }
        res.render('get_issue',{data:{dat, check}, title:'GIB:issue'});
      })
    })
});*/

module.exports = router;
