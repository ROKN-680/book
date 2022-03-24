import { Routes, Route } from "react-router-dom";
import { Home, SignIn, SignUp } from '../pages'
import * as ROUTES from './routes'

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
    </Routes>
  );
}