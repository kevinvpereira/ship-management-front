<p align="center">
  <h3 align="center">Ship CRUD Frontend</h3>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#run-locally">Locally</a></li>
        <li><a href="#docker">Docker</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is the front of the Ship Management Project, which includes all CRUD operations. 

### Built With

The website is built using the following technologies: 
* [Angular](https://angular.io)
* [Tailwind CSS](https://tailwindcss.com/)


<!-- GETTING STARTED -->
## Getting Started

To make this project work locally, please follow the instructions below. Also, this project supports Docker, so if you desire to use it, please follow the instructions in the Docker section. 

Before starting, please clone the repository: 
   ```sh
   git clone https://github.com/kevinvpereira/ship-management-front.git
   ```
Also, please follow the instructions for the backend project, otherwise, it won't work as expected: https://github.com/kevinvpereira/ship-management-backend
   
### Run locally

#### Pre-requisites

This is a list of software or packages you must have to run the project.
* npm
  ```sh
  npm install npm@latest -g
* node
  ```sh
  https://nodejs.org/en/download/
* angular
  ```sh
  npm install -g @angular/cli

Once you have all the necessary dependencies, you can move to the instructions.

#### Instructions
1. Install the node modules in the project folder
   ```sh
   npm install
   ```
2. Run the code
   ```sh
   ng serve --open
   ```
3. If everything worked as expected, you can test the application at http://localhost:4200

### Docker

1. Create the image
   ```sh
   docker build -t ship-management-front:dev .
   ```
2. Create the container
   ```sh
   docker run --name ship-management-front-container -d -p 8888:80 ship-management-front:dev
   ``` 
3. If everything worked as expected, you can test the application at http://localhost:8888

<!-- CONTACT -->
## Contact

Kevin Pereira -[@kevinvpereira](https://www.linkedin.com/in/kevinvpereira/)