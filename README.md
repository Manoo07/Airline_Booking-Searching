# Welcome to Flights Services

## Project setup
- clone the project on your local
- Execture `npm install` on the same path as of root dir
- Create a `.env` file in the root directory and add the following environment variable
    - PORT = 3000
- Inside the `src/config` folder create a newfile `config.json` and the add the following peice of json

 ```
 "development": {
    "username": <YOUR_DB_USERNAME>,
    "password": <DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
 ```