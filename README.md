# Test Exercise React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It has mongo-db database and express for backend, react and bootstrap for front-end.
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Folder Structure 
First Logic page : src\components\firstPageCourse.js\
Second Logic course exercise page: src\components\secondPageCourse.js

To run project locally \
Clone the project, then run npm install and go to src\index.js, here I have both page components,so just uncomment one to check.

It has backend folder for database and User Authorization,and express api for exchange of data.
### There are 10 main Components as follows:
* clock-timer.js  -- it is only a clock.
* create-exercise.component.js  -- it create exercises for particular user saved in database.
* create-user.component.js  -- it create user with their name, only different user name is allowed.
* create-test.component.js  -- it is test page for user, records marks for that user on submit, show that score on top of page with user name.
* exercise-list.component.js    --this page shows all created exercises, each exercise has edit and delete button.
* edit-exercise.component.js   --edited for selected exercises.
* firstPageCourse.js          -- this component is copy of [Brilliant website](https://brilliant.org/courses/logic-deduction/) Logic Course Introduction page, not completed yet.
* secondPageCourse.js            -- this page is 1st lesson of Logic course again copy of Brilliant website.
* It has diffrent component of navbar for firstPageCourse and secondPageCourse components, and other for rest of components.
* logingoogle.js  --I have google authorization part only in backend, not properly integrated with react-fronted, to only check this, run local mongodb server with db name `tutorial_db`, then run nodemon server.js  


### Uses cases and Features

I have used Bootstrap library for CSS and React front-end framework.

Basically this Web-App has user creation for test Exercises, you can create new user or use old one to create text exercise. I have also implementated google Authorization and jwt Authorization using passport library, I am creating new features like time bouded tests and some interative exercise.

I started this to learn user authentication. I will add new features into it like Teacher User auth and Student User auth (perhaps teacher provide some id of students, so we do not need student auth ) just that id verifation is enough, providing dashboard for Teacher user to add their students and create diffrent or same tests for students (time bouding test with some guids for every wrong and correct answer chioce. 

Thank you to read and try it. I will imporve it, I am working on real world usefull Mathematics\python Course website which has videos and assignments.
