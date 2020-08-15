const router = require("express").Router();

let api_key = process.env.GOOGLE_API_KEY; 

router.route("/:latitude/:longitude").get((req, res) => {
  let { latitude, longitude } = req.params;
  // Make a request for a user with a given ID
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${api_key}&type=restaurant&location=${latitude},${longitude}&rankby=distance`
    .then(function (response) {
      res.json(response);
    })
    .catch(function (error) {
      console.log(error);
      res.send(500);
      res.end();
    });
});


/*
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
  */




module.exports = router;
