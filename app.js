const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

const port = process.env.PORT || 4444;

mongoose.connect("mongodb+srv://main:zswnhbH8NHhZFNQC@cluster0.nch7i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true }, { useUnifiedTopology: true });

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static(__dirname));

const coursesSchema = {
    fullName: String,
    email: String,
    province: String,
    course: String
};

const donateSchema = {
    firstName: String,
    lastName: String,
    comments: String,
    email: String,
    donation: String
};

const applySchema = {
    firstName: String,
    lastName: String,
    dateOfBirth: String,
    age: String,
    gender: String,
    countryAndCity: String,
    workLegally: String,
    citizenship: String,
    education: String,
    time: String,
    familySize: String,
    question1: String,
    question2: String,
    question3: String,
    meetComit: String,
    registerReason: String,
    device: String,
    expectation: String,
    workStatus: String,
    pastTrainings: String,
    jobopening: String,
    previousknowledge:String,
    skills:String,
    comments:String
}

const ApplyEntry = mongoose.model("ApplyEntry", applySchema);
const DonationEntry = mongoose.model("DonationEntry", donateSchema);
const CourseEntry = mongoose.model("CourseEntry", coursesSchema);

app.get('/', (req, res) => {
   res.render('index'); 
});

app.get('/courses', (req, res) => {
    res.render('courses');
});

app.post('/courseForm', (req, res) => {
    let newCourseEntry = new CourseEntry({
        fullName: req.body.coursesName,
        email: req.body.coursesEmail, 
        province: req.body.coursesProvinces,
        course: req.body.coursesClass
    })
    newCourseEntry.save();
    res.redirect('/courses');
});

app.get('/associates', (req, res) => {
    res.render('associates');
});

app.get('/donate', (req, res) => {
    res.render('donate');
});

app.post('/donateForm', (req, res) => {
    let newDonationEntry = new DonationEntry({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        comments: req.body.comments,
        email: req.body.email,
        donation: req.body.donation
        });
    newDonationEntry.save();
    res.redirect('/donate');
});

app.get('/apply', (req, res) => {
    res.render('apply');
});

app.post('/applyform', (req, res) => {
    let newApplyEntry = new ApplyEntry({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        age: req.body.age,
        gender: req.body.gender,
        countryAndCity: req.body.countryAndCity,
        workLegally: req.body.workLegally,
        citizenship: req.body.citizenship,
        education: req.body.education,
        time: req.body.time,
        familySize: req.body.familySize,
        question1: req.body.question1,
        question2: req.body.question2,
        question3: req.body.question3,
        meetComit: req.body.meetComit,
        registerReason: req.body.registerReason,
        device: req.body.device,
        expectation: req.body.expectation,
        workStatus: req.body.workStatus,
        pastTrainings: req.body.pastTrainings,
        jobopening: req.body.jobopening,
        previousknowledge: req.body.previousknowledge,
        skills: req.body.skills,
        comments: req.body.comments
    })
    newApplyEntry.save();
    res.redirect('/');
});

app.listen(port, () => {
    console.log("Server started at port " +  port);
});