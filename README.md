# RushLance

> Rushlance is a fast, reliable platform that connects clients with skilled freelancers for on-demand services. Whether you need help with a task, project, or ongoing work, Rushlance makes it easy to find, hire, and collaborate with trusted professionals—quickly and efficiently.

---

## Running the project
Make sure you have maven download on your device check by running `mvn -v` in the terminal

- Go to `./rushlance/frontend/` 
- run `npm run dev`
- Go to `./rushlance/`
- run the `controller.py` file 

## Setup

### Connecting to the database
When connecting to the database with db.connect(`dbname`, `user`, `pass`)

- Set `dbname` for the database you are using. 
- Set `user` for the user 
- Set `pass` for the password

### Setting up the tables

- Run the `SQL` files from the `data` folder.

### Running the Backend
- For simplicity it is reccommended to use `Intellij IDEA`
- Open the Backend folder
- run the `BackendApplication.java` file
- `BackendApplication.java` is Located in `src` -> `main` -> `java` -> `com.rushlance.backend`

## API
When testing the API use [`PostMan`](https://www.postman.com/)

### Current Methods
Access them by `localhost:8080/` + `METHOD`
- GET: `GET:USERS`, `GET:ADDRESSES`, `GET:BOOKING`, `GET:SERVICE`, `GET:APPLICATION`
- POST: Getting data from the frontend to the backend [ In Progress ]
- DELETE: Removing data from the database [ In Progress ]
