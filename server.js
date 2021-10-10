if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const pg = require('pg')
//const conString = "postgres://username:password@localhost/database"
const server = express()
const bcrypt = require('bcrypt')
const initializePassport = require('./passport-config')
const passport = require('passport')
const stripe = require('stripe')
const flash = require('express-flash')
const session = require('express-session')

const users = []

/*pg.connect(conString, function(err, client, done) { 
    if(err){
        return console.error('error fetching client from pool', err)
    }
    client.query('SELECT $1::int AS number', ['1'], function(err, result) {
        done()
        if(err) {
            return console.error('error running query', err)
        }
        console.log(result.rows[0].number)
    })
})*/

initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

server.use(express.static(__dirname + '/'))
server.set('view-engine', 'ejs')
server.use(express.urlencoded({extended:false}))
server.use(flash())
server.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
server.use(passport.initialize())
server.use(passport.session())
console.log(passport.session())

server.get('/', (req, res) => {
    res.render('veneno.ejs')
})
server.get('/login', (req, res) =>{
    res.render('login.ejs')
})
server.get('/register', (req, res) =>{
    res.render('register.ejs')
})
server.get('/portfolio', (req, res) =>{
    res.render('portfolio.ejs')
})
server.get('/carrinho', (req, res) =>{
    res.render('carrinho.ejs')
})

server.post('/register', async(req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    }catch{
        res.redirect('/register')
    }
    console.log(users)
})
server.post('/login', passport.authenticate('local', {
    sucessRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))
server.listen(3001, () =>{
    console.log('Servidor de pé em: http://localhost:3001')
    console.log('Pra desligar o nosso servidor: ctrl +c')
})
