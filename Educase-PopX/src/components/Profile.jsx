function Profile({ user, setPage }) {
  return (
    <div className="screen">

      <h2>Account Settings</h2>

      <div className="profile">

        <img
          src="https://i.pravatar.cc/150?img=47"
          alt="profile"
        />

        <div>

          <h3>{user.name}</h3>

          <p>{user.email}</p>

        </div>

      </div>

      <p className="bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
        Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat.
      </p>

      <button
        className="btn secondary"
        onClick={() => setPage("welcome")}
      >
        Back to Home
      </button>

    </div>
  );
}

export default Profile;