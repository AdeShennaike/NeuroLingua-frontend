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
      <div className="bg-white/80 p-8 rounded-md shadow-md md:w-96 w-full">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="text-lg mb-2 w-full">
          <strong className="text-xl">Language:</strong>
          <select
            className="text-lg ml-3 border border-gray-300 rounded p-1"
            value={profile.language}
            onChange={(e) => handleChange(e, 'language')}
          >
            <option value="Spanish">Spanish</option>
            <option value="Arabic">Arabic</option>
            <option value="Korean">Korean</option>
            <option value="Chinese">Chinese</option>
          </select>
        </div>
        <div className="mb-2 w-full">
          <strong>Tone:</strong> {profile.tone}
        </div>
        <div className="text-lg mb-2 w-full">
          <strong className="text-xl">Difficulty:</strong>
          <select
            className="text-lg ml-5 border border-gray-300 rounded p-1"
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
        
        <button 
            className="mt-4 px-4 py-2 border rounded bg-[#E2E6E7] text-[#366664] hover:bg-[#17393A]  hover:text-white border-[#8ECAE6] focus:outline-none focus:ring focus:border-blue-300 w-full mr-2 font-semibold"
            onClick={handleSubmit} >
              Save Changes
        </button>

        <button 
           className="mt-4 px-4 py-2 border rounded bg-[#E2E6E7] text-[#A4161A] border-[#4e170d] hover:bg-[#800E13] hover:text-white focus:outline-none focus:ring focus:border-[#4e170d] w-full ml-[-1] font-semibold opacity-91"
           onClick={handleLogout} >
            Log out
        </button>

      </div>
    </div>
  );
};

export default Profile;

