import "./App.css";
import TaskList from "./components/TaskList";
import UserList from "./components/UserList";
import PhotoList from "./components/PhotoList";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<TaskList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/photos" element={<PhotoList />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
