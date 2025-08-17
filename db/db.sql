CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    create at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


INSERT INTO users (name, email) VALUES ('jhon doe','jhon@gmail.com'),('jane doe','jane@gmail.com'), ('joaquin','montecinos@gmail.com'),