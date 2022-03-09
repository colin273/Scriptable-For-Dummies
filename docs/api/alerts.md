---
id: alerts
title: Alerts
sidebar_label: Alert
---

You can show alerts and menus in your script using the `Alert `class. Alerts consist of four main sections: title, message, text fields, and actions. Menus include a title, message, and actions, but do not support text input.

Images are not supported in alerts.

## Creating an alert

To create an alert, first call the `Alert` constructor (without any arguments):

```js
const myAlert = new Alert();
```

You can set the `title` and `message` (body) properties like this:

```js
myAlert.title = "Hello world!";
myAlert.message = "I’m a shiny new alert!";
```

## Adding text input fields (alerts only)

There are two basic kinds of text fields: regular and secure. Regular text fields show you the input as you type; secure text fields mask every character with a dot and are useful for entering sensitive information like passwords.

To add a text field to your alert, call the `addTextField()` or `addSecureTextField()` methods. Each method accepts two optional string arguments:

* `placeholder`: The text that will be shown in light colored text while the field is empty. As soon as you begin typing in the field, the placeholder disappears.
* `text`: The default value of the text field.

Each method returns a `TextField` object, which can be used to further customize a text field.

```js
const myTextField = myAlert.addTextField("Foo", "Bar");
const mySecureField = myAlert.addSecureTextField("Password");
```

### Customizing a text field

Scriptable v1.6.4 introduced the `TextFiel`d class, which allows you to customize the appearance of a text field as well as which keyboard the user is shown when typing in it. In previous versions of Scriptable, particularly the current Mac beta build, this class does not exist, and `Alert.prototype.addTextField` and `Alert.prototype.addSecureTextField` return nothing.

Instances of `TextField` cannot be created directly; they must be created by calling the addTextField and addSecureTextField methods of an Alert.

You can set the following properties of a TextField:

* `font`: The font that should be used to display the text in the field.
* `isSecure`: Whether the text field should obscure the input. If for some reason you used the wrong method to create the text field, you can override that choice here.
* `placeholder`: The placeholder text.
* `text`: The default value of the text field.
* `textColor`: The color of the text in the field.

You can change the alignment of the text in the field using these methods:

* `centerAlignText()`
* `leftAlignText()`
* `rightAlignText()`

You can also change the keyboard available to the user when typing in the field, especially if you want to tailor the field for a particular sort of input, using these methods:

* `setDecimalPadKeyboard()`
* `setDefaultKeyboard()`
* `setEmailAddressKeyboard()`
* `setNumberPadKeyboard()`
* `setNumbersAndPunctuationKeyboard()`
* `setPhonePadKeyboard()`
* `setTwitterKeyboard()`
* `setURLKeyboard()`
* `setWebSearchKeyboard()`

## Adding actions (alerts and menus)

Actions, which are essentially buttons, allow the user to select a course of action in your alert or menu.

To add an action to your alert, use the `addAction()` method:

```js
myAlert.addAction("Tap me");
```

There doesn't appear to be any limit to the number of actions you can add, but having too many actions will probably be more confusing than helpful. If you need to display a very long list of items, then you may want to consider using a `UITable`, which is more complex but allows much more visual customization.

You can also add one cancel action to an alert, using the `addCancelAction()` method. Calling this method multiple times will overwrite any previously set cancel action. The text of the cancel action will be displayed on iOS and macOS, but it will not be visible on iPadOS due to the way iPadOS displays menus.

```js
myAlert.addCancelAction("Cancel");
```

## Presenting an alert

To present an `Alert` as an alert, in the center of the screen, use the `presentAlert()` or `present()` methods:

```js
const actionIndex = await myAlert.presentAlert();
```

To present an `Alert` as a menu/sheet, use the `presentSheet()` method:

```js
const actionIndex = await myAlert.presentSheet();
```

Note that all of these presentation methods are asynchronous. You must `await` the result before doing anything with what the user selects.

## Returning data

The return value of the `present()`, `presentAlert()`, and `presentSheet()` methods is the index of the action that the user selected to dismiss the alert, starting from `0`. If the user chose the cancel action instead, the index will be `-1`. In the example above, `actionIndex` carries the index of the selected action.

If the user chooses the cancel action, you should stop the script somehow.

* If you are not inside the body of any function, you can use the `return` keyword, since your entire script is actually wrapped in an asynchronous function. This terminates execution of that asynchronous function, and with it, your script.
* Otherwise, you can simply throw an uncaught error to stop immediately. This is less graceful, but quite effective.

To get the values entered into an alert's text fields, use the `textFieldValue()` method, where `0` is the index of the first text field added, `1` is the second, and so on:

```js
const plainFieldResult = myAlert.textFieldValue(0);
const secureFieldResult = myAlert.textFieldValue(1);
```

## Example alert

Putting everything together, here is a simple example of what an alert might look like in practice.

```js
// Create alert, set title and message
const loginAlert = new Alert();
loginAlert.title = "Log In";
loginAlert.message = "Enter your username and password";

// Add text input fields
const usernameField = loginAlert.addTextField("Username");
usernameField.setEmailAddressKeyboard();
loginAlert.addSecureTextField("Password");

// Add actions
loginAlert.addAction("OK");
loginAlert.addCancelAction("Cancel");

// Present, and exit if user cancels
const loginActionIndex = await loginAlert.present();
if (loginActionIndex === -1) {
  return;
}

// Log username and password that user entered to the console
console.log(`Username: ${loginAlert.textFieldValue(0)}`);
console.log(`Password: ${loginAlert.textFieldValue(1)}`);
```