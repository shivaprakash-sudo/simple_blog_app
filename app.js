const port = 3000;
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connect to database
mongoose
    .connect(process.env.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => {
        app.listen(process.env.PORT || port);
    })
    .catch((err) => {
        console.log(err);
    });

// setting up the view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// blog routes
app.use("/blogs", blogRoutes);

// 404 error page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});
