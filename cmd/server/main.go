package main

import (
	"time"

	"github.com/markdaws/go-react-boilerplate/pkg/www"
)

// This is injected by the build process and read from the VERSION file
var VERSION string

func main() {

	go func() {
		for {
			// You will want to pass these in from a config file
			endPoint := "127.0.0.1:3001"
			webUIPath := "/Users/mark/code/go/src/github.com/markdaws/go-react-boilerplate/dist"
			_ = www.ListenAndServe(webUIPath, endPoint)
			time.Sleep(time.Second * 5)
		}
	}()

	// Sit forever since we have started all the services
	var done chan bool
	<-done
}
