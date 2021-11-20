import React, { useState , useEffect } from "react";
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
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userList, setUserList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [userId, setUserId] = useState(null);
  const [todoList , setTodoList] = useState([]);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      username.trim() !== "" &&
      email.trim() !== "" &&
      number.trim() !== "" &&
      password.trim() !== ""
    ) {

      const formData = {
        username: username,
        email: email,
        number: number,
        password: password
      }

      const {data} = await axios.post('http://localhost:3001/register', formData);
      swal({
        icon: "success",
        text: data.message,
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
    const userIndex = userList.findIndex(user => user._id === userId);
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
    setUserList(userList.filter((user) => user._id !== id));
    setEdit(false);
    resetForm();
  };

  const getData = (id) => {
    setUserId(id);
    setEdit(true);
    const userInfo = userList.find((user) => user._id === id);
    setUsername(userInfo.username);
    setEmail(userInfo.email);
    setNumber(userInfo.number);
    setPassword(userInfo.username);
  };

  const getUserData = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUserList(data)
  }

  const getTodos = async id => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`);
    setTodoList(data);
  }

  useEffect(async () => {
    const {data} = await axios.get('http://localhost:3001/users');
    setUserList(data.users)
  }, [])

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

        {
          userList.length !== 0 ? (
            <UserList
              getTodoData={getTodos}
              getEditData={getData}
              deleteUser={deleteHandler}
              data={userList}
            />
          ) : <Button onClick={getUserData} val="Хэрэглэгчийн дата татах" bg="green" />
        }
      </Container>
    </React.Fragment>
  );
};

export default App;

// Edit
// Article 

// Fetch API - JSON placeholder - 10 users
// хэрэглэгч дээр дарах үед тухайн хэрэглэгчийн todo list модал дотор гарч ирэх