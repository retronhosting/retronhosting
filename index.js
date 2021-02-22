const express = require('express');
const fs = require('fs'); 
const app = express();

data = {
  notsetup:true,
  pages:{}
}

app.get('*', (req, res) => {
  url = ""
  content=""
  if (data.pages[req.originalUrl] === undefined) {
    if (data.notsetup) {
      content = "You did not setup your retronhosting config file. Please read the documentation"
    } else {
      console.log("404 "+req.originalUrl)
      url = data["404"]
      content = fs.readFileSync(url, {encoding:'utf8', flag:'r'})
    }
  } else {
    console.log("200 "+req.originalUrl)
    url = data.pages[req.originalUrl]
    content = fs.readFileSync(url, {encoding:'utf8', flag:'r'})
  }
  
  res.send(content)
});

app.listen(3000, () => {
  console.log('Website loaded!');
});
module.exports = {
  setup: (options) => {
    data = JSON.parse(fs.readFileSync(options, {encoding:'utf8', flag:'r'}));
  }
}