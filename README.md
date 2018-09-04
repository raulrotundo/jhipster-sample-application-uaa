# Deploy Microservices with JHipster + UAA
JHipster is one of those open-source projects you stumble upon and immediately think, "`Of course!`" It combines three 
very successful frameworks in web development: Bootstrap, Angular, and Spring Boot. Bootstrap was one of the first dominant 
web-component frameworks. Its largest appeal was that it only required a bit of HTML and it worked! Bootstrap showed many 
in the Java community how to develop components for the web. It leveled the playing field in HTML/CSS development, much 
like Apple's Human Interface Guidelines did for iOS apps.

At its core, JHipster is a [Yeoman](http://yeoman.io/) generator. Yeoman is a code generator that you run with a `yo` 
command to generate complete applications or useful pieces of an application. Yeoman generators promote what the Yeoman 
team calls the "`Yeoman workflow`". This is an opinionated client-side stack of tools that can help developers quickly 
build beautiful web applications. It takes care of providing everything needed to get working without the normal pains 
associated with a manual setup.

*Learn more about JHipster, including its origin, at [http://jhipster.github.io](http://jhipster.github.io).*


## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.

Build all images using the folowing command

	./build-all.sh

Go to docker folder and run

    docker-compose -f docker-compose.<dev or prod>.yml up -d

To stop them:

    docker-compose -f docker-compose.<dev or prod>.yml down

This project has also available a Spring Cloud Configuration repository in order to have a central place to manage all our external properties across all environments.

Using the dev profile will run the JHipster Registry with the dev and the composite profiles. The dev profile will load the Spring Cloud configuration from the filesystem, looking for the central-config directory, which is relative to the running directory, defined in docker/jhipster-registry.dev.yml file.

Using the prod profile will run the JHipster Registry with the prod and the composite profiles. The prod profile will load the Spring Cloud configuration from a Git repository, which is https://github.com/raulrotundo/jhipster-registry-config.


Endpoints are available in the following addresses:

Jhipster Registry:

http://localhost:8761

Application (Gateway):

http://localhost:8080
