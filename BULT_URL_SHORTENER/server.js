const express = require('express')
const { cache } = require('pug/lib')
const app = express()
const shortUrl = require('./models/shortUrl')



app.set('view engine' , 'pug')
app.use(express.urlencoded({extended: false}))
app.use(express.static('./public'))


app.get('/', async(req,res)=>{
    let urlshort = await shortUrl.find()
    res.render('index.pug',{urlshort: urlshort})
})

app.post('/shortUrls' ,async (req,res) =>{

    let newUrl = await new shortUrl({
        full : req.body.fullUrl,
        clicks: 0
    })
    try{
        newUrl = await newUrl.save()
        res.redirect(`/`)
    }catch(e){
        console.log(e)
    }
})

app.get('/:short' , async (req , res) =>{

    let theUrl = await shortUrl.findOne({short: req.params.short})
    if(theUrl === null){
        return res.sendStatus(404)
    }
    theUrl.clicks++
    theUrl.save()
    res.redirect('/')
})
app.listen(process.env.PORT || 5000)
