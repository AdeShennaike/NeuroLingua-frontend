//import tokenservice
import * as tokenService from './tokenService'
//set the base url to the env variable
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/auth`
// retrive user data from token 
function getUser() {
  return tokenService.getUserFromToken()
}
// signup function 
async function signup(user) {
  try {
    //set response to awiat the fetch for signup 
    const res = await fetch(`${BASE_URL}/signup`, {
      //set request method 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.setToken(json.token)
      return json.token
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}

async function login(credentials) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    })
    const json = await res.json()
    if (json.token) {
      tokenService.setToken(json.token)
    }
    if (json.err) {
      throw new Error(json.err)
    }
  } catch (err) {
    throw err
  }
}

function logout() {
  tokenService.removeToken()
}

export { signup, getUser, logout, login }

