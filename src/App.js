import "./App.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import List from "./pages/List";



function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      (async () => {
        const users = await axios.get("http://localhost:8000/");
        setUsers(users.data);
      })()
  })
  return (
    <div className="App">
     <List users={users} />
    </div>
  );
}

export default App;
