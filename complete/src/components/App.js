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
  const [update, setUpdate] = useState(false)
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
      setUpdate(true)
    } else {
      swal({
        icon: "error",
        text: "Бүх мэдээллийг оруулах шаардлагатай",
      });
    }
  };

  const updateHandler = async e => {
    e.preventDefault();

    const formData = {
      username: username,
      email: email,
      number: number,
      password: password,
      userId: userId
    }
    
    await axios.post('http://localhost:3001/update' , formData)

    setUpdate(true);
    
    setEdit(false);
    resetForm();
  }

  function resetForm() {
    setUsername("");
    setEmail("");
    setNumber("");
    setPassword("");
  }

  const deleteHandler = async (id) => {
    await axios.post(`http://localhost:3001/deleteUser/${id}`);
    setUpdate(true)
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

  const getTodos = async id => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`);
    setTodoList(data);
  }

  useEffect(() => {
    async function getUsersFromApi(){
      const {data} = await axios.get('http://localhost:3001/users');
      setUserList(data.users)
    }
    setUpdate(false)
    getUsersFromApi()
  }, [update])

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
          ) : <Container>
            <h1>Хэрэглэгч бүртгэлгүй байна.</h1>
          </Container>
        }
      </Container>
    </React.Fragment>
  );
};

export default App;

// Authentication
// Article