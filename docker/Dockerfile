FROM golang:alpine
ADD . /go/src/github.com/max/src-reasoning/dockerfile
RUN go install github.com/max/src-reasoning/dockerfile
CMD ["/go/bin/server"]
EXPOSE 3000
