const express = require('express')
const yelp= require("yelp-fusion")
const fetch= require('fetch')
const app = express()
app.use(express.static('public'))

PORT= process.env.PORT || 3000

const client = yelp.client('vPzqiQZR35u54VDMj6oBi9dKN58U-GcJx52axGEwUc-UxS320uWDeKvKFiSC4dsJ0oUZ8xDyL4xjOUMp6d3KqbFNzvAPA_JmOOciHFQ-3MdPc_tcSkDa5iC5ru9HX3Yx');
const clientId= "kl7b_me7EFPqnrMD_HuLkw"

// const endpoint= "https://api.yelp.com/v3/businesses/search"
// const url="https://api.yelp.com/v3/businesses/kl7b_me7EFPqnrMD_HuLkw"

let eventendpoint=`https://api.yelp.com/v3/events/featured`

app.get('/',(req,res)=>{
    
    res.render('home.ejs')
})

app.get('/results',(req,res)=>{
    var location= `${eventendpoint}/${req.query.location}`
    console.log(location)

    client.eventSearch({
        categories: 2,
        is_free: true,
        location: location
      }).then(response => {
        console.log(response.jsonBody.events[0]);
      }).catch(e => {
        console.log(e);
      });

    res.render('results.ejs')
})




app.listen(PORT, ()=>{
    console.log('app is listening on port: ', PORT)
})