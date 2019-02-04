# Web app as a desktop app for linux
(linux-desktop-web-app)
A web-app wrapped in Electron to open as a desktop app. Since linux doesn't have a lot of apps.
 
[![CircleCI](https://circleci.com/gh/anujdatar/linux-desktop-web-app.svg?style=shield)](https://circleci.com/gh/anujdatar/linux-desktop-web-app)

[![CodeFactor](https://www.codefactor.io/repository/github/anujdatar/linux-desktop-web-app/badge)](https://www.codefactor.io/repository/github/anujdatar/linux-desktop-web-app)
 
___
This app does not modify or use any direct code of any website/webapp. Just uses [Electron](https://github.com/electron/electron) to open a browser window, and serve it as a desktop application since Linux does not have an official releases of some apps.

Started as a project because WhatsApp does not work directly on Chromium Browser. And, because I hate using Ubuntu's dock, and I'd rather have it open in a window of its own and easily accessible from the dock.

Tested for [Whatsapp](https://web.whatsapp.com/), [Netflix](https://www.netflix.com), [Pandora](https://www.pandora.com) and [Volumio](http://volumio.local) local remote page.
___

## Running the dev environment
```
git clone https://github.com/anujdatar/linux-desktop-web-app
cd linux-desktop-web-app
npm install
npm start
```

___

## Building an apps
Run through the entire app build process with one command.
```
npm run build
```

Or you can go through the steps individually
### Step 1 - configure which app to build
```
npm run app-config
```
Uses [Inquirer](https://www.npmjs.com/package/inquirer) to let user select the app to build.


### Step 2 - Packaging app and creating an installer for linux
```
npm run deb-pack-install
```
Packages app for linux and creates a debian insaller.
Uses the following three commands

* **Clean old dist and build folders**

  Uses [rimraf](https://github.com/isaacs/rimraf/)
  ```
  npm run clear-build
  ```
* **Packaging**

  Uses [Electron Packager](https://github.com/electron-userland/electron-packager/)
  ```
  npm run package-linux
  ```
* **Create installer for debian based systems**

  Uses [electron-installer-debian](https://github.com/electron-userland/electron-installer-debian/)
  ```
  npm run create-debian-installer
  ```

### Step 3 - reset config jsons to default
```
npm run reset-defaults
```


## Building your own apps
Build scripts use data such as app names, icons etc. from [package.json](./package.json), [debian-config.json](./debian-config.json) and [app-config.json](./app-config.json). Sample config jsons are in the [./src/configs](./src/configs) folder. App logos & icons are in the [./src/images](./src/images) folder.
place your config jsons and icons in the folders and the build script should be able to detect new files and include options during build.


## Author
* Anuj Datar - [GitHub](https://github.com/anujdatar/)


## License
This project is licensed under the MIT License - see [LICENSE](https://github.com/anujdatar/linux-desktop-web-app/blob/master/LICENSE) for details.


**Netflix**, **Pandora**, **Volumio** and **WhatsApp**, the names, websites, images/icons and code are the intellectual properties of [Netflix Inc.](https://www.netflix.com/), [Pandora Media Inc.](https://www.pandora.com/), [Michelangelo Guarise](https://volumio.org/), and [Facebook Inc.](https://www.facebook.com/) or [WhatsApp Inc.](https://www.whatsapp.com/) respectively.


## P.S.
This application can also be built for Windows and MacOS. Tested on Windows 10 and Mac OS High Sierra (10.13.6). But WhatsApp has perfectly good desktop apps built with Electron for them. So, I don't know why you would want to, but you can.

## TODO
Amazon Music?
