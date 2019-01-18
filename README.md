# WhatsApp-web-desktop
WhatsApp-web wrapped in a desktop app.

Just opens up a desktop webview window to access [https://web.whatsapp.com] 

Uses Electron to open a browser window

___
##Running the dev environment
```
git clone https://github.com/anujdatar/WhatsApp-web-desktop.git
cd WhatsAoo-web-desktop
npm install npm start
```

##Packaging app and creating an installer for linux
```
npm run deb-pack-install
```
Packages app for linux and creates a debian insaller.
Uses the following three commands

###Packaging
Uses [Electron Packager](https://github.com/electron-userland/electron-packager)
```
npm run package-linux
```
###Create installer for debian based systems
Uses [electron-installer-debian](https://github.com/electron-userland/electron-installer-debian)
```
npm run create-debian-installer
```

##Clean dist and build folders
Uses [rimraf](https://github.com/isaacs/rimraf)
```
npm run clear-build
```
