const package = require("datapackage")
const fs = require("fs")
const data = package.load(fs.readFileSync('../raw/crisis-in-student-loans'))
  .then(
    _ => {

    }
  )