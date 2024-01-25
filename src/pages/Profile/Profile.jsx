import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(()=> {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  if (!profile) return <div>Loading profile...</div>;

  return (
    <>
      <h1>Profile</h1>
      {profile ? (
        <>
          <p><strong>Language:</strong> {profile.language}</p>
        <p><strong>Tone:</strong> {profile.tone}</p>
        <p><strong>Difficulty:</strong> {profile.difficulty}</p>
        <p><strong>Drama:</strong> {profile.drama}</p>
        <p><strong>Formality:</strong> {profile.formality}</p>
        <p><strong>Created At:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
        <p><strong>Updated At:</strong> {new Date(profile.updatedAt).toLocaleDateString()}</p>
        </>
      ): (
        <p>No profiles yet</p>
      )}
    </>
  )
}
 
export default Profile
