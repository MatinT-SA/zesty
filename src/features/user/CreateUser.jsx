import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-3 text-sm text-stone-600 md:text-base">
        Hi there! Let’s start with your name:
      </p>

      <div className="sm:flex sm:items-baseline sm:justify-center sm:gap-5">
        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-3 w-72 py-[.75rem] hover:bg-stone-50"
        />

        {username !== "" && (
          <div>
            <Button type="primary">Start ordering</Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
