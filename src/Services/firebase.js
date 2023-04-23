import { firebaseConfig } from "../config";
import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export class firebaseApp {
  static firebaseApp = undefined;
  static auth = undefined;
  static init() {
    this.firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth();
    signInWithEmailAndPassword(
      this.auth,
      "avneeshjha2015@gmail.com",
      "Ghaziabad@123"
    );
  }
}
