//import * as tokenService from './tokenService'

//set base url for api 
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`


async function getProfile() {
  try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${BASE_URL}/preferences`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}`,
                       'Content-Type': 'application/json' }
        });

        // Handle the response here (e.g., convert to JSON or check status)
        const profile = await res.json();
        console.log(profile);
        return profile;
    } catch (error) {
        console.error('Error fetching profile:', error);
    }

}

export { getProfile }