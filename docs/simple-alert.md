---
id: simple-alert
title: Let's Create A Simple Alert
sidebar_label: Create A Simple Alert
---
import useBaseUrl from '@docusaurus/useBaseUrl';

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
<img src={useBaseUrl('img/previews/simple_alert_part1.png')} width="200"/>



Did it work? Nice! if not? You can ask your problem in Discord or Reddit.
Now we will add a textfield to the alert. We can do that by using addTextField(*placeholder*, *value*). 
Let's change the button because Cancel looks a bit boring =D. You can add buttons (*also called actions*) by using addAction(*title*)

To retrieve the year you have to use *.then()* after you've presented the alert. *.then()* is used when there is a promise. Index is the number of the textfield. (Always starts at 0!)

```javascript
// Show an input field to get year
alert.addTextField("year","")

// Show a button named Calculate instead of Cancel
alert.addAction("Calculate")

// Get year by using alert.present()
alert.present().then(index => {

    // Retrieve the year by using the index from the promise
    let year = alert.textFieldValue(index)

    // Show year in the log window
    console.log(year)
})
```
When running your script it should show you this:
<img src={useBaseUrl('img/previews/simple_alert_part2.png')} width="200"/>

Now we will calculate your age and show it again with an Alert.
To calculate your age we will use Date to get the current year instead of putting it in a variable.
Because **year** is text it will be hard to calculate your age so we will change it to a Number with *parseInt()*.
Create a new Alert and give it a nice title and present it.

```javascript
// Get year by using alert.present()
alert.present().then(index => {

    // Retrieve the year by using the index from the promise
    let year = alert.textFieldValue(index)

    // Show year in the log window
    console.log(year)

    // Get the current year
    let currentYear = new Date().getFullYear()

    // Calculate your age
    let age = currentYear - parseInt(year)

    // Create a new alert
    let alertAge = new Alert();

    // Give a title to the alert
    alertAge.title = 'Your age is ' + age

    // Show the alert
    alertAge.present()

})
```
When running your script it should show you this:
<img src={useBaseUrl('img/previews/simple_alert_part3.png')} width="200"/>

You did it! Next we will learn how to create a notification!

You can also download the script to see and check on your mistakes or adding new things to it to practise!
<img src={useBaseUrl('img/button_download_for.png')} width="200"/>
