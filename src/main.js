const { app, BrowserWindow } = require('electron/main')
const path = require("path");
app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
})



function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        innerHeight: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.setMenu(null);
    window.loadFile(path.join(__dirname, "index.html"));
}