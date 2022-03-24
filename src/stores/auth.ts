import { getAuth } from "firebase/auth";
import { makeAutoObservable } from "mobx";
import { app } from "../utils/firebase";

class AuthStore {
  user: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  signOut() {
    getAuth(app)
      .signOut()
      .then(() => (this.user = null))
      .catch((e) => {
        console.log(e);
        alert("로그아웃에 실패하였습니다.");
      });
  }
}

export const authStore = new AuthStore();
