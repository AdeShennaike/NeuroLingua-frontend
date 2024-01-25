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
    <div className="flex flex-col items-center justify-center min-h-screen p-4 border border-gray-200 rounded-lg w-3/4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {profile ? (
        <>
          <div className="text-lg mb-2 w-full">
            <strong className="text-xl">Language:</strong>
            <select className="text-lg ml-2 border border-gray-300 rounded p-1" value={profile.language} onChange={(e) => handleChange(e, 'language')}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Arabic">Arabic</option>
              <option value="Korean">Korean</option>
            </select>
          </div>
          <div className="mb-2 w-full">
            <strong>Tone:</strong> {profile.tone}
          </div>
          <div className="text-lg mb-2 w-full">
            <strong className="text-xl">Difficulty:</strong>
            <select className="text-lg ml-2 border border-gray-300 rounded p-1" value={profile.difficulty} onChange={(e) => handleChange(e, 'difficulty')}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="mb-2 w-full">
            <strong>Drama:</strong> {profile.drama}
          </div>
          <div className="mb-2 w-full">
            <strong>Formality:</strong> {profile.formality}
          </div>
          <div className="mb-2 w-full">
            <strong>Created At:</strong> {new Date(profile.createdAt).toLocaleDateString()}
          </div>
          <div className="mb-4 w-full">
            <strong>Updated At:</strong> {new Date(profile.updatedAt).toLocaleDateString()}
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubmit}>Save Changes</button>
        </>
      ) : (
        <p>WHERES THE PROFILE FRITZ?!?!?!?!</p>
      )}
    </div>
  )
}

export default Profile
