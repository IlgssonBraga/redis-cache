# Redis and Node.js for data caching

<p align="center">
  <img src="https://www.kindpng.com/picc/m/338-3389065_redis-logo-svg-hd-png-download.png" alt="redis-caching" width="500"/>
</p>


# :page_with_curl: About

This project is a small application exemplifying how to use redis with node.js for data caching. Caching is useful to make 
all data processing much faster. We use Redis, a strong database that stores pairs key-value with optional durability.
Read more about [Redis](https://redis.io/) here. 

# :wrench: Technologies used

<ul>
  <a href="https://nodejs.org/en//"><li>Node.js</li></a>
  <a href="https://expressjs.com"><li>Express</li></a>
  <a href="https://redis.io/"><li>Redis</li></a>
  <a href="https://www.npmjs.com/package/axios"><li>Axios</li></a>
  <a href="https://www.npmjs.com/package/nodemon"><li>Nodemon</li></a>
  <a href="https://www.docker.com/"><li>Docker</li></a>
</ul>

# :hammer: How to run

In this project, i used [redis](https://redis.io/) in a [docker](https://www.docker.com/) container.
To install docker just follow the steps [here](https://docs.docker.com/get-docker/).
After this, run:

```
$ docker run --name caching-redis -p 6379:6379 redis:alpine
```

Now, clone this repo, install all dependencies and run the server:

```
$ git clone https://github.com/IlgssonBraga/redis-cache.git
$ cd redis-cache
[redis-cache]$ npm install
[redis-cache]$ npm start
```
Now, enjoy!!! :rocket::rocket:

# :memo: License 

This project is under MIT license. Look [License](LICENSE.md) for more details!

---

Made by [Ilgsson Braga](https://github.com/IlgssonBraga) with :heart:
