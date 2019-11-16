const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = 3000

const app = express()

// setting static files
app.use(express.static('public'))

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 設定連線到 mongoDB
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true })
const db = mongoose.connection

//連線異常
db.on('error', () => {
  console.log('Mongodb Error!')
})

//連線成功
db.once('open', () => {
  console.log('Mongodb Connected!')
})

// 載入 restaurant model
const Restaurant = require('./models/restaurant')

// 設定路由
// Restaurant 首頁
app.get('/', (req, res) => {
  Restaurant.find((err, restaurants) => {
    if (err) return console.error(err)
    return res.render('index', { style: 'index.css', restaurants })
  })
})

// 列出全部 Restaurant
app.get('/restaurants', (req, res) => {
  return res.redirect('/')
})

//Search Restaurant
app.get('/search', (req, res) => {
  Restaurant.find((err, restaurants) => {
    const keyword = req.query.keyword
    if (err) return console.error(err)
    const searchResult = restaurants.filter(restaurant => {
      return (
        restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.category.toLowerCase().includes(keyword.toLowerCase())
      )
    })

    const isDataEmpty = searchResult.length === 0 ? true : false
    res.render('index', { style: 'index.css', restaurants: searchResult, keyword, isDataEmpty })
  })
})

// 新增一筆 restaurant 頁面
app.get('/restaurants/new', (_req, res) => {
  return res.render('new', { style: 'form.css' })
})

// 新增一筆restaurant
app.post('/restaurants', (req, res) => {
  const restaurant = new Restaurant({
    name: req.body.name,
    name_en: req.body.name_en,
    category: req.body.category,
    image: req.body.image,
    location: req.body.location,
    phone: req.body.phone,
    google_map: req.body.google_map,
    rating: req.body.rating,
    description: req.body.description
  })
  // 存入資料庫
  restaurant.save(err => {
    if (err) return console.error(err)
    return res.redirect('/')
  })
})

// 顯示一筆 Restaurant 的詳細內容
app.get('/restaurants/:id', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('detail', { style: 'detail.css', restaurant })
  })
})

// 修改 Restaurant 頁面
app.get('/restaurants/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    return res.render('edit', { style: 'form.css', restaurant })
  })
})

// 修改 Restaurant
app.post('/restaurants/:id/edit', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    Object.assign(restaurant, req.body)
    restaurant.save(err => {
      if (err) return console.error(err)
      return res.redirect(`/restaurants/${req.params.id}`)
    })
  })
})

// 刪除 Restaurant
app.post('/restaurants/:id/delete', (req, res) => {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) return console.error(err)
    restaurant.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
