# simple-rest-api
We are going to create a pretty common but practical REST API for a resource called users.

Our resource will have the following basic structure:

* id (an auto-generated UUID)
* firstName
* lastName
* email
* password
* permissionLevel (used to control user’s permissions)

And we will create the following operations for that resource:

* [POST] endpoint/users
* [GET] endpoint/users (list users)
* [GET] endpoint/users/:userId (get specific user)
* [PATCH] endpoint/users/:userId (update the data for the specified user)
* [DELETE] endpoint/users/:userId (remove the specified user)

We will also be using JWT (JSON Web Token) for access tokens, and to that end, we will create another resource called auth that will expect user email and password and in return will generate the token used for authentication on certain operations.

The projetc contains three module folders:

* “common” (handling all shared services and information between user modules)
* “users” (everything regarding users)
* “authorization” (handle the flow to generate JWT and login flow) 
