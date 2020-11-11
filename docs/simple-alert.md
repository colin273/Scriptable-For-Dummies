---
id: simple-alert
title: Let's Create A Simple Alert
sidebar_label: Create A Simple Alert
---

The easiest way to learn how to use Scriptable is by creating a simple alert.

#### We will make an alert where we will ask for your birth year and returns us another alert with your age!

Create a new Script in Scriptable. To define an Alert we put it in a variable "alert".

```javascript
let alert = new Alert();

// Give a title to the alert
alert.title = 'What year were you born in?'

// Add a small message
alert.message = 'I want to calculate your age!'

// Show the alert
alert.present()
```

When running your script it should show you this:
<img src="../static/img/previews/simple_alert_part1.jpg" width="300"/>



Did it work? Nice! if not? You can ask your problem in Discord or Reddit.
Now we will add a textfield to the alert. We can do that by using addTextField(*placeholder*, *value*). 
Let's change the button because Cancel looks a bit boring =D. You can add buttons (*also called actions*) by using addAction(*title*)


```javascript
alert.addTextField("year","")

alert.addAction("Calculate")

// Get year by using alert.present()
alert.present().then(index => {
    let year = alert.textFieldValue(index)
    console.log(year)
})
```