import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequest } from "./actions/Users";
import UsersList from "./UsersList";
import NewUserForm from "./NewUserForm";

const getUsersList = ({ usersData }) => usersData.items;

function App() {
  const dispatch = useDispatch();
  const usersList = useSelector(getUsersList);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  return (
    <div
      style={{
        margin: "0 auto",
        padding: "20px",
        maxWidth: "600px",
      }}
    >
      <NewUserForm />
      <UsersList usersList={usersList} />
    </div>
  );
}

export default App;
