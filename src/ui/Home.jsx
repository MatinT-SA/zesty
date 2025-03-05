import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import PizzaScene from "./PizzaScene";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-2">
      <h1 className="text-semibold mb-3 text-center text-xl text-stone-700 md:text-3xl">
        🍕 Freshy Baked Pizza{" "}
        <span className="text-customOrange">Delivered Just for You</span>
      </h1>

      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue ordering, Matin
        </Button>
      )}

      <div className="pizza mt-1 flex h-[18rem] items-center justify-center sm:h-[29rem]">
        <PizzaScene />
      </div>
    </div>
  );
}

export default Home;
