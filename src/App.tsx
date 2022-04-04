import { useState } from 'react';
import { useRef } from 'react';

function MyButton({ count, onClick }: { count: number; onClick: () => void }): JSX.Element {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default function App(): JSX.Element {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Welcome to my App</h1>
      <h2>Counters that update together</h2>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <AboutPage />
      <Profile />
      <ShopList />
      <StopWatch />
    </div>
  );
}

function AboutPage(): JSX.Element {
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

interface User {
  name: string;
  imageUrl: string;
  imageSize: number;
}
const user: User = {
  name: 'Name Name',
  imageUrl: 'https://avatars.githubusercontent.com/u/89190380?v=4',
  imageSize: 90,
};

function Profile(): JSX.Element {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={'Prof to ' + user.name}
        className="avatar"
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

interface Product {
  title: string;
  isFruit: boolean;
  id: number;
}
const products: Product[] = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShopList(): JSX.Element {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'red' : 'green',
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

function StopWatch(): JSX.Element {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number>();

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
  }
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
