# 👻AirBnBoo👻

A clone of AirBnB is a place where people can book their paranormal/haunted stay at one of the popular haunted locations.
Users can book a stay and leave reviews after their stay.
The website can be found here: https://airbnboo.herokuapp.com/

## Website preview
![123](https://user-images.githubusercontent.com/79862908/126932815-452c6c9a-69bc-4129-9345-ac197707969f.gif)
![login-user-features](https://user-images.githubusercontent.com/79862908/126932140-51870fcf-5ec5-45ec-9d31-036332b82ed2.gif)

## Technologies used for website:

- HTML, Vanilla CSS, Javascript (front-end)
- React (front-end)
- Redux (front-end)
- csurf, dotenv, bcrypt, cookie-parser (back-end)
- express, express-session, express-validator (back-end)
- nodemon (back-end)
- postgresSQL, sequelize (back-end)
- Heroku (hosting services)


## Instructions on how to build/run the project (installation instructions):
------------------------------------------------------------------------------------
> once project is cloned

- you will cd in to the back-end folder and npm run `npm install` in the terminal

> cd into the front-end folder

- Then run `npm install`
 ------------------------------------------------------------------------------------
> in your psql:

- Create a user of you choice and with the following commands: `CREATE USER <user> with PASSWORD '<password>' CREATEDB;`

> you will cd into the back-end folder and create a .env

- Copy the contents of *.env-example* into your *.env* file
- replace the DB_USERNAME, DB_PASSWORD, etc.
-
> Create the database by running sequelize in the terminal

- run `npx dotenv sequelize db:create`
- run `npx dotenv sequelize db:migrate`
- finally run `npx dotenv sequelize db:seed:all`
--------------------------------------------------------------------------------------
> Start the application:

-cd into the back-end folder and run `npm start`
-open a second terminal and cd into the front-end folder and run `npm start`

👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻
