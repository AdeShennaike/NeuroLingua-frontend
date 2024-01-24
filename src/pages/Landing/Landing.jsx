const Landing = ({ user }) => {
  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      {user ? (
        <p>Hello, {user.name}</p>
      ) : (
        <p>Please log in to see personalized content.</p>
      )}
      {/* Other content of the Landing page */}
    </div>
  );
};

export default Landing;
