import React from 'react';
import {useTypedSelector} from "./hooks/useTypedSelector";
import {Route, Routes} from "react-router-dom";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import './App.scss'
import Navbar from "./components/Navbar/Navbar";

function App() {
    const {users, error, loading} = useTypedSelector(state => state.user)
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path={'projects'} element={<ProjectsPage/>}/>
            <Route path={'projects/:projectId'} element={<TasksPage/>}/>
            <Route path={'*'} element={<ProjectsPage/>}/>
        </Routes>
    </>
  );
}

export default App;
