import { createNewUser } from "components/actions/Users";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function NewUserForm() {
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const dispatch = useDispatch();

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(
      createNewUser({ firstName: userFirstname, lastName: userLastname })
    );
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormGroup>
        <Label>Firstname</Label>
        <Input
          required
          placeholder="First name"
          value={userFirstname}
          onChange={(e) => setUserFirstname(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Lastname</Label>
        <Input
          required
          placeholder="Last name"
          value={userLastname}
          onChange={(e) => setUserLastname(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button block type="submit" color="primary">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
}

export default NewUserForm;
