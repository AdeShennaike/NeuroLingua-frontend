import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profile = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile()
      setProfile(profileData)
    }
    fetchProfile()
  }, [])

  if (!profile) return <div>Loading profile...</div>;

  const handleChange = (event, parameter) => {
    setProfile({ ...profile, [parameter]: event.target.value });
  }

  const handleSubmit = async () => {
    const updatedProfile = await profileService.updateProfile(profile);
    console.log('Profile updated:', updatedProfile)
  }

  return (
    <>
      <h1>Profile</h1>
      {profile ? (
        <>
          <div><strong>Language:</strong> <select value={profile.language} onChange={(e) => handleChange(e, 'language')}>
            {/* Assuming 'English', 'Spanish', etc., are the possible options */}
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="Arabic">Arabic</option>
            <option value="Korean">Korean</option>
            {/* Add more options as needed */}
          </select></div>
          <div><strong>Tone:</strong> {profile.tone}</div>
          <div><strong>Difficulty:</strong> <select value={profile.difficulty} onChange={(e) => handleChange(e, 'difficulty')}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select></div>
          <div><strong>Drama:</strong> {profile.drama}</div>
          <div><strong>Formality:</strong> {profile.formality}</div>
          <div><strong>Created At:</strong> {new Date(profile.createdAt).toLocaleDateString()}</div>
          <div><strong>Updated At:</strong> {new Date(profile.updatedAt).toLocaleDateString()}</div>
          <button onClick={handleSubmit}>Save Changes</button>
        </>
      ) : (
        <p>WHERES THE PROFILE FRITZ?!?!?!?!</p>
      )}
    </>
  )
}

export default Profile
