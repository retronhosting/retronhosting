# retronhosting
In your index.js file:
~~~js
const retronhost = require("retronhosting");
retronhost.setup("./config.retronhosting.js")
~~~

Make a file named "config.retronhosting.js"
Insert this code in the file:
~~~json
{
  "pages": {
    "/": "pages/index.html"
  },
  "404": "pages/404.html"
}
~~~
This file is kindof self-explanitory
