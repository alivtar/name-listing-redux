import { deleteUser } from "components/actions/Users";
import { useDispatch } from "react-redux";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

function UsersList({ usersList }) {
  const dispatch = useDispatch();

  function handleUserDelete(userId) {
    dispatch(deleteUser(userId));
  }

  return (
    <ListGroup>
      {usersList
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((user) => {
          return (
            <ListGroupItem key={user.id}>
              <section
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {user.firstName} {user.lastName}
                </div>

                <Button
                  outline
                  color="danger"
                  onClick={() => handleUserDelete(user.id)}
                >
                  Delete
                </Button>
              </section>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
}

export default UsersList;
