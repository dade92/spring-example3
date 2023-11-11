# SPRING EXAMPLE

Sample maven project for spring boot applications using java and kotlin languages.
It follows [hexagonal architecture principles](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749).
It contains both backend and frontend applications. FE is done with React + webpack to bundle.

## How to build

- Build for development: inside the webapp application, run `npm run watch`: this will generate the js executables inside
  the resources/static folder. Then launch the application using IDEA.
- Build for production (not useful for development, is something the pipeline will take care of) run `mvn clean package`
  and then launch the jar inside the webapp/target folder

### CI/CD

TBD

## Run the entire application

TBD