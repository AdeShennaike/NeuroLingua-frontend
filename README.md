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

| Description               | Method  | Endpoint         | Mongoose Operation         |
|---------------------------|---------|------------------|----------------------------|
| View Quiz History         | GET     | /quizzes         | `findMany(Profile)`        |
| View Quiz (in history)    | GET     | /quiz/:id        | `findOne(Quiz)`            |
| New Quiz                  | GET     | /quiz            | `createOne(Quiz)`          |
| Answer Quiz               | PUT     | /quiz            | `updateOne(Profile)`       |
| Delete Quiz (from history)| DELETE  | /quiz/:id        | `findOneAndDelete(id)`     |
| Report Quiz               | POST    | /report          | `createOne(Report)`        |
| View User Profile         | GET     | /profile         | `findOne(Profile)`         |
| Update User Profile       | PUT     | /profile         | `updateOne(Profile)`       |
| Login                     | POST    | /login           | `findOne(User)`            |
| Sign up                   | POST    | /signup          | `createOne(User)`          |

## Trello Board

https://trello.com/b/jhJTqQtB/neurolingua

## ERD

# User
- **email:** String
- **password:** String
- **profile:** Profile

# Profile
- **quizLanguage:** String
- **quizzes:** [Quiz]
- **userLanguage:** String
- **difficulty:** String
- **formality:** String
- **Drama:** String

# Quiz
- **question:** String
- **answer:** String
- **wrongAnswers:** [String]
- **language:** String
- **difficulty:** String
- **formality:** String
- **drama:** String

# Feedback

- **quiz:** Quiz
- **message:** String
- **good**: Bool

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
