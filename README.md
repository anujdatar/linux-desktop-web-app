# linux-desktop-web-app
 A web-app wrapped in Electron to open as a desktop app. Since linux doesn't have a lot of apps.

This app does not modify or use any direct code of any website/webapp. Just uses [Electron](https://github.com/electron/electron) to open a browser window, and serve it as a desktop application since Linux does not have an official releases of some apps.

Started as a project because WhatsApp does not work directly on Chromium. And, because I hate using Ubuntu's dock, and I'd rather have it open in a window of its own and easily accessible from the dock.

Tested for [Whatsapp](https://web.whatsapp.com/), [Netflix](https://www.netflix.com), [Pandora](https://www.pandora.com) and [Volumio](http://volumio.local) local remote page.
___


## Running the dev environment
```
git clone https://github.com/anujdatar/linux-desktop-web-app
cd linux-desktop-web-app
npm install
npm start
```

## Packaging app and creating an installer for linux
```
npm run deb-pack-install
```
Packages app for linux and creates a debian insaller.
Uses the following three commands

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

* **Clean dist and build folders**

  Uses [rimraf](https://github.com/isaacs/rimraf/)
  ```
  npm run clear-build
  ```


## Author
* Anuj Datar - [GitHub](https://github.com/anujdatar/)


## License
This project is licensed under the MIT License - see [LICENSE](https://github.com/anujdatar/linux-desktop-web-app/blob/master/LICENSE) for details.


**Netflix**, **Pandora**, **Volumio** and **WhatsApp**, the names, websites, images/icons and code are the intellectual properties of [Netflix Inc.](https://www.netflix.com/), [Pandora Media Inc.](https://www.pandora.com/), [Michelangelo Guarise](https://volumio.org/), and [Facebook Inc.](https://www.facebook.com/) or [WhatsApp Inc.](https://www.whatsapp.com/) respectively.


## P.S.
This application can also be built for Windows and MacOS. Tested on Windows 10 and Mac OS High Sierra (10.13.6). But WhatsApp has perfectly good desktop apps built with Electron for them. So, I don't know why you would want to, but you can.

## TODO
Netflix, Pandora, etc..
