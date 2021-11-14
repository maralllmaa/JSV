import React, { useState } from "react";
import Card from "./Card";
import Container from "./Container";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import UserList from "./UserList";
import Divider from "./Divider";
import swal from "sweetalert";
import TextArea from "./TextArea";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [userId, setUserId] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      number.trim() !== "" &&
      password.trim() !== ""
    ) {
      setUserList([
        ...userList,
        {
          username: username,
          email: email,
          number: number,
          password: password,
          id: Math.random().toString().split(".")[1],
        },
      ]);

      swal({
        icon: "success",
        text: "Амжилттай бүртгэгдлээ",
      });
      resetForm();
    } else {
      swal({
        icon: "error",
        text: "Бүх мэдээллийг оруулах шаардлагатай",
      });
    }
  };

  const updateHandler = e => {
    e.preventDefault();
    const userIndex = userList.findIndex(user => user.id === userId);
    const updateUserData = [...userList];
    updateUserData[userIndex] = {
        username: username,
        email: email,
        number: number,
        password: password,
        id: userId
    }
    setUserList(updateUserData);
    setEdit(false);
    resetForm();
  }

  function resetForm() {
    setUsername("");
    setEmail("");
    setNumber("");
    setPassword("");
  }

  const deleteHandler = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
    setEdit(false);
    resetForm();
  };

  const getData = (id) => {
    setUserId(id);
    setEdit(true);
    const userInfo = userList.find((user) => user.id === id);
    setUsername(userInfo.username);
    setEmail(userInfo.email);
    setNumber(userInfo.number);
    setPassword(userInfo.username);
  };

  return (
    <React.Fragment>
      <Container>
        <Card>
          <Form onSubmit={edit ? updateHandler : submitHandler}>
            <Label htmlFor="username" label="Username" />
            <Input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              id="username"
              placeholder="Username"
            />
            <Label htmlFor="articleBody" label="Нийтлэл" />
            <TextArea id="articleBody" placeholder="Нийтлэл" />
            <Label htmlFor="email" label="Email" />
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              placeholder="Email"
            />
            <Label htmlFor="number" label="Number" />
            <Input
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              id="number"
              placeholder="Number"
              type="number"
            />
            <Label htmlFor="password" label="Password" />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="password"
              placeholder="Password"
              type="password"
            />
            <Button val={edit ? "Засах" : "Бүртгэх"} bg="green" />
          </Form>
        </Card>

        <Divider />

        {userList.length !== 0 && (
          <UserList
            getEditData={getData}
            deleteUser={deleteHandler}
            data={userList}
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default App;

// Edit
// Article 