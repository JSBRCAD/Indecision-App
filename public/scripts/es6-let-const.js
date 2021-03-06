"use strict";

console.log('App.js is running!');

//if statements
//ternary operator
//logical and operator


var app = {
    tittle: " Indecision APP",
    subtitle: "This is some info",
    options: ['One', 'Two']

};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.tittle
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        "subtitle: ",
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var user = {
    name: "Justus",
    age: 31,
    location: "Ontario"

};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location:",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
