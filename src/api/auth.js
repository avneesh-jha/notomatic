import { FirebaseApp } from "../Utils/firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export class AuthApi {
  static async signIn(email, password) {
    const response = await signInWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
  static async signOut() {
    signOut(FirebaseApp.auth);
  }
  static async signUp(email, password) {
    const response = await createUserWithEmailAndPassword(
      FirebaseApp.auth,
      email,
      password
    );
    return response.user.toJSON();
  }
}
