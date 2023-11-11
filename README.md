# SPRING EXAMPLE

Sample maven project for spring boot applications using java language.
It follows [hexagonal architecture principles](https://netflixtechblog.com/ready-for-changes-with-hexagonal-architecture-b315ec967749).
It contains both backend and frontend applications. FE is done with React + webpack to bundle, while BE is done with
spring boot

## How to build (FE pointing to BE)

- Build for development: inside the webapp application, run `npm run watch`: this will generate the js executables inside
  the resources/static folder. Then launch the application using IDEA.
- Build for production (not useful for development, is something the pipeline will take care of) run `mvn clean package`
  and then launch the jar inside the webapp/target folder

## FE development only

If you want to just see the UI, go inside the webapp folder and launch `npm run dev`. This will use webpack to launch a 
web server and put inside your js code. MirageJs is used to mock rest calls. 

### CI/CD

TBD

## Run the entire application

TBD