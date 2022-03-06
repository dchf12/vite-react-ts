import { useState } from 'react';

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
