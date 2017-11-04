var express = require('express')
var fetch = require('node-fetch')
var urlapi = require('url')

var router = express.Router()

router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
/* Request GitHub API */
router.post('/getissues', function (req, res) {
  var url = urlapi.parse(req.body.url)
  var urlres = 'https://api.github.com/repos' + url.pathname + '/labels'
  // console.log(urlres)
  fetch(urlres)
    .then(function (response) {
      response.json().then(function (data) {
        // console.log(data);
        res.send(data)
      })
    })
})

module.exports = router
