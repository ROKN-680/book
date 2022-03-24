import { Link } from "react-router-dom";
import { Navbar } from "../../layouts/Navbar";
import * as ROUTES from '../../router/routes'

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        Home
      </div>
    </>
  );
};
