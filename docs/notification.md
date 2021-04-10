---
id: notif
title: Notifications
sidebar_label: Notifications
---

- [Intro](#intro)
- [What you can see - the basics:](#what-you-can-see---the-basics-)
- [Actions](#actions)
- [Identifiers and userInfo](#identifiers-and-userinfo)
  * [identifier](#identifier)
  * [threadIdentifier](#threadidentifier)
  * [userInfo](#userinfo)
- [Running a script from a notification](#running-a-script-from-a-notification)
  * [Obtaining the URL](#obtaining-the-url)
  * [Opening the URL](#opening-the-url)
- [Sounds and Badges](#sounds-and-badges)
  * [Sound](#sound)
  * [Badge](#badge)
- [scriptName](#scriptname)
  * [Displaying Text](#displaying-text)
  * [Displaying a UI table](#displaying-a-ui-table)
  * [Displaying a website](#displaying-a-website)
- [The end](#the-end)


# Intro

The very first thing we need to do is create the notification like this:
```js
var notification = new Notification()
```
Well now we have a notification but to see it you have to add 
```js
notification.schedule()
```

# What you can see - the basics:

The notification we made won’t actually send because apple doesn’t allow blank notifications, so lets add a title:
```js
notification.setTitle('This is a title')
```
As well as the title you can have a subtitle and a body. Here is a diagram of them both:

They are both quite simple to understand and are used the same way as the title we made earlier. 

# Actions

An action is a button which shows when you press and hold down on the notification. You can have up to 10.

Using our script from before we add an action like this:
```js
notification.addAction()
```
There is three parameters for this. Title, URL and an optional destructive.

## Title

Title is a string that will be the text inside the action button. 

## Url

URL is a string that defines what link is opened when you press the button. 

## Destructive

Finally you have destructive which is a boolean value (true or false) basically it changes the button colour to red.

## Example

Lets make one together
```js
notification.addAction('All the syntax', 'https://docs.scriptable.app/notification')
```
Now that we have a action we can check it worked by adding this
```js
console.log(notification.actions)
```
This should print <br></br>
{ <br></br>
  "title": "All the syntax", <br></br>
  "url": "https://scriptable.app/notification" <br></br>
} <br></br>
To add destructive you add another , just before the closing bracket then add true

# Identifiers and userInfo

This section we will be covering identifier, threadIdentifier and userInfo.

## identifier

Identifier is used to cancel or change a notification that has been scheduled but it hasn’t been received yet. Check the docs for info about it.

## threadIdentifier

As you may have seen your notifications are automatically grouped, a set of messages from one person and a different set of messages from another person. To do this you would use threadIdentifier. 
```js
notification.threadIdentifier = 'whatever you want'
```
for each notification you send you can change the threadIdentifier 

## userInfo

This is used to store information in a notification. When a script is run from a notification (next section) you can do 
if(config.runsFromNotification) {
//checks if it was ran from a notification
var userinfo = Notification.opened
//retrieves the value
console.log(userinfo)
//logs the value
}

# Running a script from a notification

## Obtaining the URL

To obtain the url that runs a script do this
```js
console.log(URLScheme.forRunningScript())
```
This should print something like this scriptable:///run/Scriptname. 

## Opening the URL

There is three ways to open a link we will only focus on the first two for now.
1. `notification.addAction('Run', 'scriptable:///run/scriptname')`
2. `notification.openURL = 'scriptable:///run/scriptname'`

And thats it.

# Sounds and Badges

## Sound

If you want a sound when the notification is received thankfully it's quite easy.
```js
notification.sound = 'sound'
```
The sound can be one of the following:
* null (no sound)
* default
* accept
* alert
* complete
* event
* failure
* piano_error
* piano_success
* popup

## Badge

You may have noticed on your home screen the the top right corner of some apps there is a red circle with a number in. This is a badge, it mostly shows the notifications received from that app. However, we can change this. 
```js
notification.badge = 0
//no badge
notification.badge = null 
//no change
notification.badge = 6
//sets it to 6
```
# scriptName

This uses whats called a rich notification which lets you preview images and other things inside the notification when you hold down on it. This is not all the thing you can do with it but there is many different you can preview so I will start with 3. Note: you can’t display widgets in it and also the preview is above the title and everything else.

## Displaying Text

Perhaps the simplest thing you can do with it is display text. One of the many useful things with rich notifications is that you can do it cross script. Although here I will do it in one script for simplicity.
```js
var notification = new Notification()
notification.scriptName = 'Example' 
//set it to your script name
notification.addText('This is below whats above')
if(config.runsFromNotification) {
QuickLook.present('This is above what’s below')
//sets the preview
Script.complete()
//so you don’t get duplicate notifications
} else {
notification.present()
}
```
Now in that you may have noticed you set the quick view once the notification runs the script. This could be used for obtaining variables from different scripts.

## Displaying a UI table

To do this you will need to create a [UI table](https://docs.scriptable.app/uitable) and then just change the quick look from displaying text to 
```js
var uitable = new UITable 
//make table with whatever you want
QuickLook.present(uitable)
```

## Displaying a website

This is my personal favourite because it actually allows you to interact with the website. For example, if there is a text box on the site you can type in it and also press buttons that open links (although it opens it in your default browser). To do this first get the script from displaying text above. Then make the following changes inside the if statement. 
```js
var web = new WebView()
//This creates a web view
web.loadURL('https://google.com')
//or your own link
QuickLook.present(web)
```
make sure to remove the other QuickLook.present too.

# The end

Thats all for notifications for now! Check out everything you can do [here](https://docs.scriptable.app/notification)
