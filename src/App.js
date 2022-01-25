import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PostList />} path='/' />
        <Route element={<PostList />} path='/@:username' /> 
        <Route element={<LoginPage />} path='/login' />
        <Route element={<RegisterPage />} path='/register' />
        <Route element={<WritePage />} path='/write' />
        <Route element={<PostPage />} path='/@:username/:postId' />
      </Routes>
    </>
  )
};

export default App;