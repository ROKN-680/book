import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../layouts/Navbar";
import { HOME } from "../../router/routes";
import { authStore } from "../../stores/auth";
import { app } from "../../utils/firebase";

export const SignUp = observer(() => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        authStore.user = user; // Update Store
        alert("회원가입이 완료되었습니다.");
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
        <form onSubmit={handleSubmit} className="flex flex-col w-80 mx-auto">
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
            회원가입하기
          </button>
        </form>
      </div>
    </>
  );
});
