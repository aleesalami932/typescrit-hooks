import { useState } from "react";

const UseStateComponent = () => {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => setArr([...arr, arr.length + 1])}>
          Add to Array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => setName("ali")}>Set Name</button>
        {name}
      </div>
    </div>
  );
};

export default UseStateComponent;
