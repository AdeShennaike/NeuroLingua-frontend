import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profile = () => {
  const [profile, setProfile] = useState([])

  useEffect(()=> {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  return (
    <>
      <h1></h1>
      {profile.length ? 
        <>
          {profile.map(profile=>
            <p key={profile.language}>{profile.name}</p>
          )}
        </>
      :
        <p>No profiles yet</p>
      }
    </>
  )
}
 
export default Profile

// import * as profileService from '../../services/profileService'

// const Profile = () => {

//   // State to hold quiz data
//   const [profileData, setProfileData] = useState();

//   // Effect to fetch quiz data on component mount
//   useEffect(() => {
//     const fetchProfile = async () => {
//       const profile = await profileService.getProfile();
//       console.log(profile)
//       setProfileData(profile); 
//     };
//     fetchProfile();
//   }, []); 
  
//   if (!profileData) return <div>Loading profile...</div>; 
  
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile