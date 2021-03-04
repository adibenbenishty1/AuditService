const elasticSearchClient = require('./ElasticSearchService.js');  
const bodyParser = require('body-parser');
const dateFormat = require('dateformat');
const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

//app.use(bodyParser);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


function getSampleObject ()
{
  let exampleObject = {User:"Booli ish a sheleg", Location:"Method foo", Message:"Send key values as listed in this test object"};
  return exampleObject;
}

app.post('/audit', function(req, res){

    let user_id = req.body.id;




     let newObj = getSampleObject();
     newObj.User = req.body.User;
     newObj.Location = req.body.Location;
     newObj.DateTime = dateFormat(new Date(), "yyyy-mm-dd'T'HH:MM:ssZ");
     newObj.Message = req.body.Message;

    //console.log(newObj);

    elasticSearchClient.Index("audit", newObj);

    res.status(200).send(user_id + " thanks for calling! Entire body: " + req.body);
});

app.get('/test', function(req, res){

    res.status(200).send(getSampleObject());
});


app.listen(port);