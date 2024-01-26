//import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/quizzes`

async function getQuiz() {
    try {
        const token = localStorage.getItem('token')
        const res = await fetch(`${BASE_URL}/quiz`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        // Handle the response here (e.g., convert to JSON or check status)
        const quiz = await res.json();
        console.log(quiz);
        return quiz;
    } catch (error) {
        console.error('Error fetching quiz:', error);
    }
}

async function getHistory() {

    try {
        const token = localStorage.getItem('token')
        const res = await fetch(`${BASE_URL}/history`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        // Handle the response here (e.g., convert to JSON or check status)
        const history = await res.json();
        console.log(history);
        return history;
    } catch (error) {
        console.error('Error fetching quiz history:', error);
    }


}

async function getAnswer(id) {
    try {
        const token = localStorage.getItem('token')
        const res = await fetch(`${BASE_URL}/answer/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        // Handle the response here (e.g., convert to JSON or check status)
        const quizAnswer = await res.json();
        console.log(quizAnswer);
        return quizAnswer;
    } catch (error) {
        console.error('Error fetching quizAnswer:', error);
    }
}

export {
    getQuiz,
    getHistory,
    getAnswer
}


