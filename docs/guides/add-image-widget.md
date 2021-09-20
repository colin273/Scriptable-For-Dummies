---
id: add-image-widget
title: How To Add An Image To A Widget
sidebar_label: Add An Image To A Widget
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Contents
* [Intro](#intro)
* [Loading An Image](#loading-an-image)
* [Showing An Image As A Background](#showing-an-image-as-a-background)
## Intro

Images in widgets are amazing! but how would one add an Image to a widget? In this tutorial we will be covering on how to add an one to a widget.

## Loading An Image

So to load an image through an url, you'll need to make a request. The best way to do this is by creating a function which will return our Image. 

```javascript
async function loadImage() {
    let url = "<URL>"
    let request = new Request(url)
    return request.loadImage()
}
```

The loadImage function will return an Image object.

## Showing An Image As A Background

Now there are multiple ways to show an image in a widget. I'll be talking about one called [backgroundImage](https://docs.scriptable.app/listwidget/#backgroundimage)

So if you would want to set it as a background, you'll just need 2 lines of code.


```javascript
// This will return the image in the 'img' variable
let img = await loadImage()

// This will set the image as a background
widget.backgroundImage = img
```

## Adding An Image To A Stack

If you don't want to set an image as background you can always add it to a stack.

Very easy to achieve this. 

```javascript
// This will return the image in the 'img' variable
let img = await loadImage()

// This will create a new stack
let stack = widget.addStack()

// Adding the image to the stack
let imageElement = stack.addImage(img)

// Extra options to customize the image element
imageElement.imageSize = new Size(15,15)
imageElement.cornerRadius = 4
```

This will conclude our small tutorial regarding images in widgets.