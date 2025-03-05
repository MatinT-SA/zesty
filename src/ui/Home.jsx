import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import PizzaScene from "./PizzaScene";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="text-semibold mb-8 text-center text-xl text-stone-700 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-customOrange">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, Matin
        </Button>
      )}

      <div className="flex h-[500px] items-center justify-center">
        <PizzaScene />
      </div>
    </div>
  );
}

export default Home;
