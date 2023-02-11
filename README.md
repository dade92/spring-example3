**SPRING EXAMPLE**

Sample maven project for spring boot applications using java and kotlin languages.
It follows hexagonal architecture principles (https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749)
and uses different testing techniques, especially for the data layer classes.
Moreover, it shows usages of other less common technologies (like NoSQL database).
It contains also a Jenkinsfile to allow continuous integration with jenkins, and 
a Dockerfile that can be used after the build stage to build a docker image.

**HOW TO BUILD**

Download docker: https://docs.docker.com/get-docker/.
Build inside a docker container (basically you don't even need Maven installed locally) 
by using the .sh script typing: `./build.sh`.

**HOW TO RUN**

Run using `docker compose up`.

**HOW TO TEST**
If you want to test the app locally, first run the script `./run-local-environment.sh` and then
run the application. Then make some local testing