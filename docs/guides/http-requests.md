---
id: http-requests
title: HTTP Requests
sidebar_label: HTTP Requests
---
- [Intro](#Intro)
- [A simple request](#A-simple-request)
   * [Instances of Request](#Instances-of-Request)
   * [Response](#Response)
   * [Promises and async](#Promises-and-async)
- [Expanding our Request with Headers](#Expanding-our-Request-with-Headers)
- [Going further with HTTP methods and Body](#Going-further-with-HTTP-methods-and-Body)
- [Wrap Up](#Wrap-Up)

## Intro
>If you are already familiar with JavaScript, you will be for sure aware of what HTTP requests are. If you aren't, don't worry! Just take your time reading [this](https://developer.mozilla.org/en-US/docs/Web/HTTP) article and then come back here to learn how to apply what you just read in Scriptable.

In JavaScript we use `fetch` or `XMLHttpRequest` for sending requests to servers, and in NodeJS we use packages such as `node-fetch` or `request-promise`.<br></br>
But in Scriptable we **can't** use those methods. We instead have to rely on a particular API built into Scriptable: it's called `Request`. Let's see how to use it.

## A simple request
```javascript
var request = new Request("https://random-data-api.com/api/nation/random_nation")
var result = await request.loadJSON()
console.log(result)
```
So you made your fist request in Scriptable. Congrats! Let's see the code in details:<br></br>

### Instances of Request
```javascript 
var request = new Request("https://random-data-api.com/api/nation/random_nation")
```
Here we're declaring a new variable called `request`, and creating a new *instance* of the Request object.
As you can see, we are also passing an URL as a *parameter* for the new instance.

This line of code is basically creating a request to the url we passed as parameter. 

**Notice that this line of code is **not** sending a request to the server, it is just constructing a new request that will need to be sent in the next lines.**

Now let's go ahead:

```javascript 
var result = await request.loadJSON()
```
So once our request has been created, we just need to send it. 
This is what the `load` method is for, actually sending the request and interpreting the response.

### Response
But what does it means to "interpret" the response? Once a request is sent, the client receives a response from the server, that can be JSON data, text, images or more. Scriptable offers some different methods (like `loadJSON`, `loadString` or `loadImage`) for downloading and interpreting the target of the request the right way. 

In this case, we're sending a request to an API that returns JSON data, so we use the `loadJSON()` method.

> If you want to scrape the entire HTML source of a webpage, use the `loadString()` method.

### Promises and async
But let's go back at our code. Notice that we have also written the `await` keyword, which means that we are telling our script to wait until our promise is resloved before continue running the next lines.

Indeed, the `load` method returns a `Promise`, which is a JavaScript object that represents an **eventual** and **future** completion of an asynchronous method or task, and its value.

> If you have never heard of asynchronous programming and promises, please take note that this is **not** a simple concept. It is very important for you to completely understand this stuff, so take your time reading articles and guides. I suggest you to begin with [this](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous), but there's plenty of material online.


And finally:
```javascript 
console.log(result)
```

## Expanding our Request with Headers
HTTP headers are a way for the client or the server to pass each other additional informations while sending and receiving HTTP requests. Headers can contain tokens, credentials, informations or anything else. You can read more about HTTP headers [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

Let's see how we can expand our request by sending some informations to the server:
```javascript
var request = new Request("https://random-data-api.com/api/nation/random_nation")
request.headers = {"Content-type": "application/json;charset=UTF-8"}
var result = await request.loadJSON()
console.log(result)
```

The line we want to focus on is the second - the new - one. Let's go deeper:
```javascript
request.headers = {"Content-type": "application/json;charset=UTF-8"}
```
With this code we're attaching to the `request` variable (which, remember, is an instance of the `Request` object) an header.

This specific header sends the server some metadata about the request, but you can write anything you want in an header (remember that it only accept strings), and you can also attach multiple headers.

## Going further with HTTP methods and Body
During this post we only wrote HTTP GET requests, which are the most common (mostly while writing scripts). But there are others type of HTTP request methods, like POST or DELETE. 
> If you don't know what an HTTP method is or just want to refresh your memory, heads over to [this](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) link

In Scriptable, we are able to use others methods just by adding this to our code, *before* actually sending the request:
```javascript
request.method = "POST"
```
If you are using some HTTP methods like POST, PUT or DELETE, you may want to pass some data with the request to the server.
The request body is exactly what you would need in that case.

The request body is very similar to the request headers:
```javascript
request.body = "Tom"
```
Take note that scriptable currently only supports String and Data types into the Request body.

## Wrap Up
So you learned how to make HTTP Requests in Scriptable, great work! This topic opens you a endless range of possibilities while writing scripts and widgets. But there's more! Once you are comfortable with everything you just read here, try looking at the the others parameters and methods of the Request object in the [Scriptable docs](https://docs.scriptable.app/request/).

If you have any questions about this topic, feel free to reach out in the r/Scriptable discord server. See you there!
