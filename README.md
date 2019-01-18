# WhatsApp-web-desktop
WhatsApp-web wrapped in a desktop app.

Just opens up a desktop webview window to access https://web.whatsapp.com. This app does not change or modify or use any direct code from WhatsApp. Just uses [Electron](https://github.com/electron/electron) to open a browser window, and serve it as a desktop application since Linux does not have an official release, and WhatsApp-web does not work on Chromium.

Just for personal use, because I hate using Ubuntu's dock, and I'd rather have it open in a window of its own and easily accessible from the dock.

___
## Running the dev environment
```
git clone https://github.com/anujdatar/WhatsApp-web-desktop.git
cd WhatsApp-web-desktop
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
This project is licensed under the MIT License - see [LICENSE](https://github.com/anujdatar/WhatsApp-web-desktop/blob/master/LICENSE) for details.

[WhatsApp](https://www.whatsapp.com/), then name, website, icon and code are the intellectual property of [Facebook](facebook.com), or [WhatsApp Inc.](#) or whatever.
