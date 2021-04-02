# Scriptable For Dummies

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.



## How to add a new docs Page

Basically you just need the folder **docs** and **sidebars.js**

First you create a markdown file in the docs folder (`example.md`) and add the code below at the top of the newly created markdown file.
```
---
id: *ID* (needed for sidebar.js)
title: *Title* (Title that will be visible when clicking on the page)
sidebar_label: *Sidebar Title* (Title that will be visible on the sidebar of the docs page)
---
```
In the `sidebar.js` you'll just have to add the ID that you've added in the markdown file into the guides array.
```
"⚙️ Guides": ['add-text-widget', 'add-image-widget', <ID>],
```

Now you can start adding stuff in your markdown file =D 

**Note** When adding images, you have to put it in the static folder with a subfolder named after your markdown file.
