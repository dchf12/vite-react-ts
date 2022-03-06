function MyButton(): JSX.Element {
  return <button>Click</button>;
}

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
      <AboutPage />
      <Profile />
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

const user = {
  name: "Name Name",
  imageUrl: "https://avatars.githubusercontent.com/u/89190380?v=4",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Prof to " + user.name}
        className="avatar"
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return <div>{content}</div>;
