# Title: jh-products_db

# Table of Contents:

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Questions](#questions)

## Description

The application can be used to send post,put,get, and delete
to a server that we have created.

## Installation

Install mysql.
Install node js.
Copy the code from github.
open server file in terminal.
run npm i make sure you have all the packages you need. listed in the package.json file.

## Usage

open mysql in terminal using mysql -u "yourUsername" -p "yourPassword"
in terminal run the schema file a using SOURCE schema.sql.
create and adjust a .env file so the application will function properly.
.env file should look like this :
DB_NAME='db_name'
DB_USER='username'
DB_PASSWORD='userpassword'.

run the seeds file using node seeds/index.js

now we can navigate to our server file and run our server using npm run start in the terminal.

using insomnia we can test the routes we have created using localhost3001/api/products(categories, tags)/
or add a parameter :id to be more specific

## Contributions

Class assignments, w3 schools for object deconstruction, stack overflow articles for help with model structure and attributes.

## Questions

https://github.com/lilcobby

video of functionality

![Alt text](jh-products_db.gif.gif)
