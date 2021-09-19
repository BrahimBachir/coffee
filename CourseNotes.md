## Decorators


## Components
#   Module
    Modules extremly recomended as an effective way to organize your application. In ideal architecture should employ multiples modules each encapsulating a closely related set of capabilities.

    It is a class atached with a @Module decorator. The decorator provides metadata that NestJS uses to organize the App structure. The @Module decorator takes a single object whose properties describe the module and all of its context.

    The @Module's argument object contains four main things:
    1. Controllers: the are like API roots that we want this module to instantiate.
    2. Exports: a list of providers that are provided by this module and should be available anywere this module is imported.
    3. Imports: list of imported modules that exports the providers which are requerid in this module.
    4. Providers: a list of services that will be instanciated by the Nest injector and that may be shared at least across this module.

#   Services
    Separating our business logic into services helps make this logic reuseable throught multiples parts of our application.

## Commands
nest generate componente | nest g co [the component's name] ==> To create a component in the CLI
nest generate service | nest g s [the service's name] ==> To create a service in the nest CLI
nest generate module | nest g module [the module's name] ==> To create a new module
nest g class [folder/name_of_the_file.extension] ==> To create, for example, a Dto file.

npm run start ==> To start the application.
npm run startu:dev 

## Response 
#   Response status
    We can pass our own status code to the response object. That could be done with the decorator @HttpCode and the parameter
    HttpStaus (both from the nestjs/vommon folder).

#   Response object
    We can manage the express.js (or the fastify) Respnde object by importing the @Res decorator from nestjs/common.

## Pipes
#   Prevent malicious atacks
    1. Via whitelistng propeties, we can automaticly drop any property that must not be in the request object.
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
            })
        );
    2. Also we can stop the incoming request from being processed if any non-white listed properties are present throwing an error insted.
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                forbidNonWhitelisted: true
            }),
        );
    3. ValidationsPipe can help us transform this object into axactly what we're expecting.
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                transform: true,
                forbidNonWhitelisted: true
            }),
        );

## Third part packages
#   class-validator
    npm install class-validator | npm i class-validator ==> To validate the request Data.
#   class-transformer
    npm install class-transformer | npm i class-transformer==> To transforma the request Data into a valid object: need to fit int eDTO shapes.
#   @nestjs/mapped-types
    Hsve a class, PartialType, who recive as an argument a DTO and return it with all the fileds marcked as optional and with the same rules applied to the original DTO.

## Docker
#   Compose
    .yml file ==> The file where the docker configuration will be added.

## TypeORM
    npm i @nestjs/typeorm ==> The NestJS typeORM package.
    npm i typeorm ==> The TypeORM package for NestJS.
    npm i pg ==> The postgresSQL package for NestJS.