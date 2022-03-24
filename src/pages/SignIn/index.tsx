import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../layouts/Navbar";
import { authStore } from "../../stores/auth";
import { HOME } from "../../router/routes";
import { app } from "../../utils/firebase";

export const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        authStore.user = user;
        navigate(HOME);
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <form onSubmit={handleSignIn} className="flex flex-col w-80 mx-auto">
          <input
            type="email"
            className="border px-2 py-0.5 mb-2"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            className="border px-2 py-0.5 mb-2"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button type="submit" className="bg-violet-600 text-white px-3 py-2">
            로그인
          </button>
        </form>
      </div>
    </>
  );
};
