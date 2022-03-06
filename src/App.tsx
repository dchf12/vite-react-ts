import { useState } from "react";

function MyButton(): JSX.Element {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Click:{count}times</button>; //ハンドラ関数は実行しない
}

export default function App(): JSX.Element {
  return (
    <div>
      <h1>Welcome to my App</h1>
      <MyButton />
      <MyButton />
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
