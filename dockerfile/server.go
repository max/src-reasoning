package main

import (
  "io"
  "net/http"
)

func hello(w http.ResponseWriter, r *http.Request) {
  io.WriteString(w, "Hello World")
}

funct main() {
  http.HandleFunc("/", hello)
  http.listenAndServe(":3000", nil)
}
