require("dotenv").config();
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/api/books", (req, res) => {
        db.Books.find().then(
            (bookData) => {
                res.json(bookData);
            }
        ) .catch(
            (err) => {
                res.json({error: err});
            }
        );
    });
    
    app.post("/search", (req, res) => {
        let bookTitle = req.body.title.replace(/\s/g, "+");
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GBOOKS_KEY}`
        ) .then(
            (response) => {
                res.json(response.data.items)
            }
        ) .catch(
            (err) => {
                res.json({error: err})
            }
        );
    });

    app.post("/api/books", (req, res) => {
        //database books-models accessing- .create passing req.body
        db.Books.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }                                
        );
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Books.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json({error: err});
            }
        );
    });

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"));
        });
}