FROM golang:1.8
ADD . /go/src/github.com/max/src-reasoning/docker-example
RUN go install github.com/max/src-reasoning/docker-example
CMD ["/go/bin/docker-example"]
EXPOSE 3000
