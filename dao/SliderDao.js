var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root:admin@ds111420.mlab.com:11420/information_tb";

var SliderDao = {
    addSlider: function (slider) {
        try {
            MongoClient.connect(url, function (err, db) {
                var dbo = db.db("information_tb");
                var myobj = slider;
                // var myobj = { image: "https://www.w3schools.com/bootstrap/la.jpg", description: "Hello Thai Binh" };
                dbo.collection("slider").insertOne(myobj, function(err, res) {
                  if (err) throw err;
                  console.log("1 document inserted");
                  db.close();
                });
            });
        } catch (error) {
            console.log(error);
        }
    },

    getAllSlider : function(callback){
        try {
            MongoClient.connect(url, function (err, db) {
                var dbo = db.db("information_tb");
                var mysort = { _id: -1 };
                dbo.collection("slider").find().sort(mysort).limit(3).toArray(function(err, result) {
                    console.log(result);
                    db.close();
                    callback(result);
                  });
            });
        } catch (error) {
            console.log(error);
            callback(null);
        }
    }
}

module.exports = SliderDao;

SliderDao.getAllSlider(function(){

});