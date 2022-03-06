function MyButton(): JSX.Element {
  return <button>Click</button>;
}

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
    </div>
  );
}
