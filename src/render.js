const fs = require("./main.js")
let documents = document.getElementById("documents");
documents.addEventListener("load", () => {
    fs.readdir("C:\\Users\\12300258\\Documents", (err, files) => {
        files.forEach(file => {
            console.log(file)
        })
    })
})