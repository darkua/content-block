content-block, a blockstack library for app data sharing
===========================

## Install

    npm install content-block

## Description

Content storage is underlying driver to definise a phisical layer of storage

Content Collection creates the abstraction layer, to define an type base data schema
to simplify user sharing data cross apps.


## Usage Example


```js
const content = require("block-content")

const blockStack = content.storage();
const notes = new content.collection({
    type: "note",
    storage: blockStack,
    userID:"ryan.id"
});

// Save Content
notes.createItem({ "txt": "blockstack, decentralize this note!"}).then((res)=>{
    console.log("this is a awsome note",res.id)
}).catch((err)=>{
    console.error(err)
})

//Get App Content by Identifier
notes.getItem("note.id").then((res)=>{
    console.log("this is a awsome note",res)
}).catch((err)=>{
    console.error(err)
})


//Get ALL USER DATA type, shared across blockstack Multi Player Application

lookupProfile("ryan.id").then(async (u)=>{
    let items = await notes.getUserData(Object.values(u.apps),"note");
    console.log("items",items)
})
```