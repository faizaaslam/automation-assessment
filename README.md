# Respond.io WebApp
Automation of https://app.respond.io/user/login using playwright with typescript
-----------------------------------------------------------
## Technology: <br>
* Automation Framework: Playwright 
* Build tool: npm <br>
* Language: Typescript <br>
* Report: Allure,html-report <br>
* IDE: Visual Studio Code | Webstrom<br>

----------------------------------------------------------

## Requirement:<br> 
UI & API Flows

----------------------------------------------------------

## Prerequisite:
The following software are required:

1. nodejs : Download and Install Node JS from<br>
    https://nodejs.org/en/download/<br>
2. Install Java 8 or above, Allure Reports require Java 8 or higher.<br>
3. Allure commandline : Install allure command line for generating Allure Reports using<br>
    npm install -g allure-commandline<br>
    
----------------------------------------------------------

## Installation:
1. Clone the repo using below URL git@github.com:faizaaslam/automation-assessment.git<br>
2. Navigate to project folder and install npm packages using:<br>
  npm install<br>

----------------------------------------------------------

## Targetted browser:
1- Chrome<br>

----------------------------------------------------------

## Usage:
1. For execution of single test file:
   <code>npm run test:single</code><br>
   You can change file name in package.json > test:single in script section to execute any other file. 
2. For execution entire test suite of functional tests:
   <code>npm run test:functional</code>
3. For execution entire test suite of Api tests:
   <code>npm run test:api</code>
   
## Report generation:
Two types of reporting are being used in this framework:<br>
1- Allure reporting: <code>npm run allureReport</code> <br>
2- Html Report: <code>npm run htmlReport </code> 

## Testcases Automated:
###UI:
TC01-Verify user is able to successfully login with valid data <br>
TC02-Verify user should see error message when trying to login with invalid credential <br>

###API:
TC01 - Verify login api returns 200 status code with valid credentials <br>
TC02 - Verify that the  workspace collaboration invite endpoint returns a 201 response with valid data <br>

