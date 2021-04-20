# Discord.js

[Discord.js](https://discord.js.org/) is a super snazzy library that lets is make extremely powerful Discord bots!

## Requirements

In order to use discord.js, we need to have [NodeJS](https://nodejs.org/en/download/) and NPM installed. Head [here](https://nodejs.org/en/download/) to download NodeJS (and NPM, which is packaged in to the download)!

If you are not on Mac or Windows, check out [here](https://nodejs.org/en/download/package-manager/) for more installation instructions.

## Lets get started

Be sure to have NodeJS installed!

You can check to make sure everything is installed properly by opening a terminal and running `node -v && npm -v` which should show two version numbers! As long as you get 2 lines of numbers, you'll be good for this lesson! If you're having problems, just Google `installing node [PLATFORM]`, like "installing node windows" and they should help you out. Google and StackOverflow is your friend!

### Setting up our project

Lets get started by going in to a directory that we want to do create our project. Open a terminal where you want your project to be.
```
mkdir my-discord-bot
cd my-discord-bot
```

Next, we're going to run `npm init -y` which will create some files for us! (the -y argument keeps everything at defaults. Remove -y if you want to specify project info, which tbh isn't important for this tutorial).

Now that we've set up our project, we can start installing stuff!

### Installing Modules

[NPM](https://www.npmjs.com/) is a package repository that allows us to install a variety of open source modules for our projects. We're going to start by installing [Discord.js](https://www.npmjs.com/package/discord.js), which we can do by running
```
npm install discord.js --save
```
(The --save flag adds this module to our package.json, which has a definition of the modules we install. This is very useful for giving your project to your friend or just remembering what you installed)

<details>
<summary>## Creating a Server</summary>

Now that you are able to make a bot, you need to make a place for it to live. To get started, open up Discord and follow these steps:

1: Select the plus button at the bottom of your server list.

![add a server](https://i.imgur.com/xpYb4bU.png)

2: Select the "Create My Own" button.

![create my own](https://i.imgur.com/0j2pswe.png)

3: Name the server whatever you want, and then click "Create"

![name server](https://i.imgur.com/OdIlEhC.png)

You should now see a blank server in your server list!

![blank server](https://i.imgur.com/YBfzuF5.png)
</details>
