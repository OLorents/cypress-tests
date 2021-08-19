# Cypress tests
This project provides smoke tests for dummy website. Cypress and Java Script were used to create tests.

**Run tests**
Do the following steps to run tests:
- Clone this repository
- Be sure you have Node.js installed or install it from here https://nodejs.org/
- Open cmd 
- Move to the root test folder and run: **npx cypress run**, you will get following result 
![image](https://user-images.githubusercontent.com/42312812/130062390-dfc127c5-9f1f-4392-ac31-9345f0bcbd4d.png)

**Configuration**
- in **cypress.json** file **baseUrl**, **username** and **password** are defined
 ![alt text](https://user-images.githubusercontent.com/42312812/130061047-421d704f-5112-499b-9ebd-f7bf05358a73.png)
 
**TestFramework**
- in **support** folder page objects are located 
![alt text](https://user-images.githubusercontent.com/42312812/130061660-e1110611-af97-4a27-bb15-ff24e7aaf15a.png)

- In **commands.js** you can find common commands that are used across all the tests 
![alt text](https://user-images.githubusercontent.com/42312812/130062112-265d55fe-6d02-4a42-8a83-b581ab551b1d.png)

- Test are in integration\parabank-tests folder
![alt text](https://user-images.githubusercontent.com/42312812/130062365-421988c8-8e91-471e-b98a-41098ceb1dc9.png)
