import { useState } from "react";

function MyButton({ count, onClick }: { count: Number; onClick: () => void }) {
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

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ShopList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "red" : "green",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
