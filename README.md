# simple-rest-api
Pretty common but practical REST API for a resource called users.

Our resource contains the following basic structure:

* id (an auto-generated UUID)
* firstName
* lastName
* email
* password
* permissionLevel (used to control user’s permissions)

And created the following operations for that resource:

* [POST] endpoint/users
* [GET] endpoint/users (list users)
* [GET] endpoint/users/:userId (get specific user)
* [PATCH] endpoint/users/:userId (update the data for the specified user)
* [DELETE] endpoint/users/:userId (remove the specified user)

We also use JWT (JSON Web Token) for access tokens, and to that end, we will create another resource called auth that will expect user email and password and in return will generate the token used for authentication on certain operations.

The project contains the following folder three:

* “common” (handling all shared services and information between user modules)
  - config
  - middlewares
  - service
 * “users” (everything regarding users)
  - controllers 
  - models
* “authorization” (handle the flow to generate JWT and login flow) 
  - controllers
  - middlewares
