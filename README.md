# Welcome to Flights Service

## Project Setup

- clone the project in your local
- Execute `npm install` cmd on the same path as your root directory of the downloaded project
- Create `.env ` file in the root directory and add the following variables
  - `PORT = 3000`
- Inside `src/config` folder create a new file `config.json` and then add the following json

  ```

    {
      "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR DB PASSWORD>,
        "database": "FLIGHTS_SEARCH_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }


  ```

- Once you have added db config as listed above , go to the src folder from your terminal and execute `npx sequelize db: create `
  and then execute

  ` npx sequelize db:migrate`

## DB Design

- Airplane Table
- Flight
- Airport
- City

- A flight belongs to one airplane but one airplane can be used for multiple flights
- A city has many airports but one airport belongs to one city
- One airport can have many flights , but a flight belongs to one airport
