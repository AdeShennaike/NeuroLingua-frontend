# NUERO LINGUA

### Your personalized language learning companion.

## Features

### Dynamic Quizzes
Embark on a delightful journey of language exploration with our dynamic quizzes crafted by Open AI. Tailored to suit your unique learning preferences, these quizzes cover a wide range of topics, ensuring a comprehensive understanding of the language you're exploring.

### Personalized Settings
Craft your language learning adventure by customizing your experience. Choose your preferred language, decide between casual or formal language structures, and fine-tune the difficulty level to match your proficiency. 
If you'd like to add some excitement, choose the dramatic setting to make your learning journey more fun and interesting.

### Progress Tracking
Stay motivated and effortlessly monitor your progress. Neuro Lingua keeps a record of the quizzes you've completed, allowing you to revisit and reinforce your knowledge. The power is in your hands as you navigate through your language learning journey with ease.

## User Stories
#### MVP Goals

- As a user, I want to quiz myself in various languages.
- As a user, I want to view past quiz results.
- As a user, I want to view individual quiz results.
- As a user, I want to be able to login to see my profile.
- As a user, I want to utilize full CRUD.


#### Stretch Goals

- As a user, I want to translate articles in the langauge i am practcing. 
- As a user, I want to view my progress tracker.

## Wire Frame

<img width="2900" alt="Untitled" src="https://github.com/AdeShennaike/NeuroLingua-frontend/assets/1472318/e40b5869-8abb-4d7b-a8ed-7c0738c79f63">

## Routes

| Description           | Method  | Endpoint               | CONTROLLER                            | Mongoose Operation         |
|-----------------------|---------|------------------------|---------------------------------------|----------------------------|
| View Quiz History     | GET     | /quizzes/history       | getQuizHistory()                      | `findMany()`               |
| View Quiz             | GET     | /quizzes/:id           | getQuizDetails(quizId)                | `findOne()`                |
| Get Quiz              | GET     | /quiz                  | getQuiz()                             | `findOne()`                |
| Answer Quiz           | PUT     | /quizzes/:id/answer    | answerQuiz(quizId)                    | `updateOne()`              |
| Delete Quiz           | DELETE  | /quizzes/:id/delete    | removeQuizFromHistory(quizId)         | `updateOne()`              |
| Report Quiz           | POST    | /quizzes/:id/feedback  | provideFeedback(quizId)               | `createOne()`              |
| View User Profile     | GET     | /profile               | viewPreferences()                     | `findOne()`                |
| Update User Profile   | PUT     | /profile               | updatePreferences(preferences)        | `updateOne()`              |
| Login                 | POST    | /login                 | login(email, password)                | `findOne()`                |
| Sign up               | POST    | /signup                | signup(email, password)               | `createOne()`              |

## Trello Board

https://trello.com/b/jhJTqQtB/neurolingua

## ERD

![Database ER diagram (crow's foot)](https://github.com/AdeShennaike/NeuroLingua-frontend/assets/1472318/0d1068d8-67be-4935-aac4-448d2b5002a1)


## Component Hierarchy

<img width="7375" alt="Untitled (2)" src="https://github.com/AdeShennaike/NeuroLingua-frontend/assets/1472318/8e466c75-f12b-44bf-a28f-25d33246a9d2">


## Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- Github
- Nodemon
- Cors
- Mongoose
- Dotenv
- ChatGPT
