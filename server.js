
var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Shravani Agrofarms </h1>"
            +"<hr/>"
            +"<h3>Fruites for sale</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Peru</li>"
            +"<li>Chiku</li>"
            +"<li>Kesar amba</li>"
            +"<li>Sitafal</li>"
            +"<li>Naral</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Shravani Agrofarms </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Owner: Kisan R. Lokhande</li>"
            +"<li>Director: Savita K. Lokhande</li>"
            +"<li>Contact: 7276449320</li>"
            + "</ol>"
    );
});


var server=app.listen(7000);
console.log("Agro Fram running on port 7000");