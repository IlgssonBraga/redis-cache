const express = require('express');
const redis = require('redis');
const axios = require('axios');

const app = express();

const client = redis.createClient(6379);

const cache = (req, res, next) => {
    const {username} = req.params
    client.get(username, (err, reply) => {
        if (reply !== null){
            console.log(reply);
            console.log('Using redis')
            res.send(`${username} has ${reply} public repos on Github.`);
        } else {
            next();
        }
    })
}

app.get('/users/:username', cache, async (req, res) => {
    const {username} = req.params
    const user = await axios.get(`https://api.github.com/users/${username}`);
    console.log(user.data.public_repos);
    res.send(`${username} has ${user.data.public_repos} public repos on Github.`);
    console.log('Using axios');
    client.setex(username, 30, user.data.public_repos, (err) => {});
    res.send('Hello');
});

app.listen(3333, () => console.log('Server running on port 3333...'))