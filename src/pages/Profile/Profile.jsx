import { useState, useEffect } from 'react';
import * as profileService from '../../services/profileService';
import { Link } from 'react-router-dom';

const Profile = ( {handleLogout} ) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getProfile();
      setProfile(profileData);
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Loading profile...</div>;

  const handleChange = (event, parameter) => {
    setProfile({ ...profile, [parameter]: event.target.value });
  };

  const handleSubmit = async () => {
    const updatedProfile = await profileService.updateProfile(profile);
    console.log('Profile updated:', updatedProfile);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md md:w-96 w-full">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="text-lg mb-2 w-full">
          <strong className="text-xl">Language:</strong>
          <select
            className="text-lg ml-2 border border-gray-300 rounded p-1"
            value={profile.language}
            onChange={(e) => handleChange(e, 'language')}
          >
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
          <select
            className="text-lg ml-2 border border-gray-300 rounded p-1"
            value={profile.difficulty}
            onChange={(e) => handleChange(e, 'difficulty')}
          >
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
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubmit}>
            Save Changes
          </button>
        <button onClick={handleLogout} className="px-2 py-2 bg-red-500 text-white rounded hover:bg-blue-600" style={{ marginLeft: '10px' }}>
            Log out
          </button>
      </div>
    </div>
  );
};

export default Profile;

