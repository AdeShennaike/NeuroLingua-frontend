import * as tokenService from './tokenService'

//set base url for api 
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`
//
async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
  })
  return await res.json()
}

export { getAllProfiles }