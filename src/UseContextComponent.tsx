import { useContext, useState } from "react";
import UserContext, { InitialState } from "./store";

const UseContextComponent = () => {
  const [user, setUser] = useState<InitialState>({
    first: "mhmd",
    last: "salami",
  });
  // const firstInput: string | undefined = document
  //   .querySelector<HTMLInputElement>("#first")
  //   ?.value.toString();
  // const lastInput: string | undefined = document
  //   .querySelector<HTMLInputElement>("#last")
  //   ?.value.toString();
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <input type="text" placeholder="first name" id="first" />
      <input type="text" placeholder="last name" id="last" />
      <button
        onClick={() =>
          setUser({
            first: "firstInput",
            last: "lastInput",
          })
        }
      >
        Change name
      </button>
    </UserContext.Provider>
  );
};

const ConsumerComponent = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>First: {user.last}</div>
    </div>
  );
};

export default UseContextComponent;
