const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')()
const sequelize = require('./models').sequelize
const notice = require('./api/notice')
const auth = require('./api/auth')
const upload = require('./api/upload')
require('dotenv').config()

console.log('NODE_PORT = ', process.env.DEV_NODE_PORT)

app.use(cors)
sequelize.sync()

app.use(bodyParser.json({
  extended: true,
  limit: '100mb'
}))
app.use(bodyParser.urlencoded(
{
  extended: true,
  limit: '100mb'
}))

app.use(express.static('public'))
// app.get('/', (req, res, next) => {
  console.log(__dirname+'/public/index.html');
  // res.sendFile(path.join(__dirname, './public', 'index.html'))
  // res.sendFile(__dirname+'/public')
// })

// app.get('/images', (req, res) => {
//   console.log('============');
//   res.status(200).json({dd:'dd'})
// })

// app.use('/static', express.static(__dirname + '/public'))

// app.get(`/static/images`, (req, res) => {
//   console.log('erewlkrjwlkajrlweakraes');
//   res.end()
// })
// app.get('/static', express.static(__dirname + '/public'), (req, res) => {
//     console.log('=============== static ===========')
// })

// app.all('/static', (req, res) => {
//   console.log('=============== static ===========')
//   res.status(200).end('dd')
// })

app.post('/notice', notice.create)
app.get('/notice/:noticeId', notice.detail)

app.get('/notice', require('./api/jwt').returnAuth(), notice.list)

app.put('/notice/:noticeId', notice.modify)
app.delete('/notice/:noticeId', notice.destroy)
app.post('/login', auth.login)
app.post('/popup', upload.single('image'), require('./api/popup').create)
app.post('/registration', auth.join)

app.get('/userInfo', require('./api/jwt').returnAuth(), require('./api/userInfo').info)

// app.use((req, res, next) => {
//   // res.status = 404
//   next(Error('not found'))
// })
  
// app.use((err, req, res, next) => {
// // console.log(err)
// console.log('errrr');
// res.status(res.statusCode || 500)
// res.json({ error: err.message || 'internal server error' })
// })

app.listen(process.env.DEV_NODE_PORT || 3000, () => {
  console.log("3000 대기중!")
})


