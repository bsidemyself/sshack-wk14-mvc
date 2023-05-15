const { Post } = require('../models');

const postData = [
    {
        title: "Airline Food",
        post_text: "What is the deal with airline food?",
        user_id: 1
    },
    {
        title: "Is It a Lie?",
        post_text: "Remember, it is not a lie if you believe it.",
        user_id: 2
    },
    {
        title: "The Dingo and the Baby",
        post_text: "MAYBE A DINGO ATE YOUR BABY",
        user_id: 3
    },
    {
        title: "Internship at Kramerica Industries",
        post_text: "We have an intern opening, Darren did not work out.",
        user_id: 4
    }
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed