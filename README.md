# SPRING EXAMPLE

Sample maven project for spring boot applications using java and kotlin languages.
It follows [hexagonal architecture principles](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749)
and uses different testing techniques, especially for the data layer classes.
Moreover, it shows usages of other less common technologies (like NoSQL database).
It contains also a Jenkinsfile to allow continuous integration with jenkins, and 
a Dockerfile that can be used to build a docker image.

## How to build

There are two options:

- Build inside a docker container (basically you don't even need Maven installed locally)
  by using the .sh script typing: `./build.sh`. You will find the built file in the
  usual maven directories
- Build locally running `mvn clean package`

## Run the entire application

Run using `./run.sh` command.
This will download from dockerhub the images and run everything using docker compose.\
You can stop shut everything down running the script `./stop.sh`.

## Local testing

If you want to test the app locally, first run the script `./run-local-environment.sh`. This starts a 
mongodb instance and a mongo express interface reachable at `localhost:8081`. 
Then run the application.
