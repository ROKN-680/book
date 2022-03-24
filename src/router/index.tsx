import { Routes, Route, Link } from "react-router-dom";
import { Home, Login } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}