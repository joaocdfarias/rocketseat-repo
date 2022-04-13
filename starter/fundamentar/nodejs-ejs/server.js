const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  const items = [
    { title: 'D', message: 'esenvolver aplicações/serviços de forma fácil' },
    { title: 'E', message: 'JS usa JavaScript para rendereizar HTML' },
    { title: 'M', message: 'uito fácil de usar' },
    { title: 'A', message: ' escrita é facil' },
    { title: 'I', message: 'nstall EJS' },
    { title: 'S', message: 'intaxe simples' },
  ]

  const subtitle = 'Linguagem de modelagem para criação de HTML'
  res.render('pages/index', {
    qualities: items,
    subtitle: subtitle,
  })
})

app.get('/about', function (req, res) {
  res.render('pages/about')
})

app.listen(8080)
console.log('Server rodando! 🚀')
