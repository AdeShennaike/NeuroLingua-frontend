//import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/quizzes` 

async function getQuiz() {
    try {
        const res = await fetch(`${BASE_URL}/quiz`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        // Handle the response here (e.g., convert to JSON or check status)
        const quiz = await res.json();
        console.log(quiz);
        return quiz;
    } catch (error) {
        console.error('Error fetching quiz:', error);
    }
}

export {getQuiz }