# Jurassic-Park Management System

This project was my final group assignment at the end of the Java module of my Software Development course at CodeClan. Our team of three opted for the task to create a web application that allows the administration of the Jurassic Park theme park to manage the dinosaur population, as well the tracking of visitors in the park. The minimum viable product included enabling the user to add and remove paddocks in the park, add or remove dinosaurs to paddocks, feed the dinosaurs, as well as transfering dinosaurs between paddocks. Recommended extra features included allowing only dinosaurs marked as the same type (either herbivores or carnivores) to occupy the same paddock, as well as viewing the number of visitors at a given time. My focus in the project was on providing the CSS styling, but I also contributed to adding functionality to the React front-ent. The app was built using ReactJS for the front end, the Intellij IDE (with Java and Spring framework) for the server side, and PostgreSQL for the database. 

## Prerequisites

* [NodeJS](https://nodejs.org/en/)
* [Java](https://www.oracle.com/java/technologies/javase-downloads.html)
* [Maven](https://maven.apache.org/download.cgi#)
* [PostgreSQL](https://www.postgresql.org/download/)

## How To Run

* Start the PostgreSql service:

```
$ sudo service postgresql start
```

* Create the Jurassic Park database:

```
$ sudo -u postgres -i
$ createdb jurassicparkmanagement
```

* From inside the 'back_end/Jurassic-Park' folder, start the back-end server:

```
$ mvn spring-boot:run
```

* (In a new terminal) From inside the 'front_end/jurassic-park' folder, start the front-end:

```
$ npm install
$ npm start
```

* (Optional) Check from the terminal that the database is persisting:

```
$ sudo -u postgres -i
$ psql powerup
```

## Authors

* **[Stan Tarnev](https://github.com/StanTarnev)**
* **[Rebecca Still](https://github.com/Boopster)**
* **[Sreenandini Mallela](https://github.com/SREENANDINIMALLELA)**


