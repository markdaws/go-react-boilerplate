# go-react-boilerplate
A simple boilerplate project to use react+redux served from a golang powered server.  If you want to hack on some react and host it using a golang server, this is a good place to start.

## Buzzword Bingo
 - React
 - Redux
 - golang
 - bootstrap
 - less
 - jquery
 - node.js
 
 ##Development
1. Clone the repo
2. Modify the webUIPath variable in: https://github.com/markdaws/go-react-boilerplate/blob/master/cmd/server/main.go
3. In the root folder run:
```bash
go install ./cmd/server/ && server
```
In another terminal window, switch to the pkg/www directory, then run:
```bash
npm install
npm run dev
```

You should be able to see a website at localhost:3001, when it loads it makes an API call to /api/v1/items and loads the items from the server, they are then rendered in the app using the regular react+redux actions/reducers etc.  Any modifications to html/css/js are automatically picked up by webpack so you can just reload the webpage.
