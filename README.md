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

### Delete Option
Take control of your learning experience by enjoying the flexibility to delete quizzes. Tailor your practice sessions with ease, ensuring you focus on what matters most to you.


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

# Report

- **quiz:** Quiz
- **message:** String


## Wire Frame

![image]()

## Trello Board

https://trello.com/b/jhJTqQtB/neurolingua

## User Stories


#### MVP Goals

- As a user, I want to quiz myself on various languages.
- As a user, I want to view past quiz results.
- As a user, I want to view individual quiz results.
- As a user, I want to be able to login to see my profile.
- As a user, I want to utilize full CRUD.


#### Stretch Goals

- As a user, I want to translate articles in the langauge i am practcing. 
- As a user, I want to view my progress tracker.


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

## API Endpoints

- **Get All Quiz Results**
  - Endpoint: `/users/quizresults`

- **Get Specific Quiz Result**
  - Endpoint: `/users/quiz/:id`

- **Get New Quiz**
  - Endpoint: `/newquiz`

- **Add Completed Quiz**
  - Endpoint: `/users/quizresults`

- **Change Main Language**
  - Endpoint: `UPDATE /users/language`

- **Delete Quiz Result by ID**
  - Endpoint: `/users/quizresults/:id`
