function MyButton(): JSX.Element {
  return <button>Click</button>;
}

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
      <AboutPage />
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

<img className="avatar" />;
