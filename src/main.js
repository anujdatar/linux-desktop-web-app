// Modules to control application life and create native browser window
const {app, BrowserWindow, shell, session} = require('electron')
const path = require('path')
const appConfig = require('../app-config.json')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
console.log(appConfig.webLink)

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: path.join(__dirname, '../' ,appConfig.appIcon),
    webPreferences: {
      nodeIntegration: false
    }
  })
  
  // and load https://web.whatsapp.com in the window
  mainWindow.loadURL(appConfig.webLink,
  {userAgent: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.106 Safari/537.36'})

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
  defContentPolicy()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // clears service worker before close
  // makes new window register new service worker
  // otherwise you get the WhatsApp browser version error
  mainWindow.webContents.unregisterServiceWorker(() => {
    console.log('Goodbye!!')
  })
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Limit/disable the creation of additional windows
app.on('web-contents-created', (event, contents) => {
  contents.on('new-window', (event, navigationUrl) => {
    // In this example, we'll ask the operating system
    // to open this event's url in the default browser.
    event.preventDefault()

    shell.openExternal(navigationUrl)
  })
})


// setting a Content-Security-Policy
function defContentPolicy() {
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    // console.log(details.url)
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ["script-src 'self'"]
      }
    })
  })
}
