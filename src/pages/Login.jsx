import { getAuth, signInWithPopup, GoogleAuthProvider,  } from "firebase/auth";
import {firebaseApp} from "../../firebase.config";
import { useNavigate } from "react-router-dom";

export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();

const login = () => {

  const navigate = useNavigate();

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ... (Your code to handle successful sign-in) ...
      console.log("Sign-in successful:", user);
      navigate("/");

    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log("Sign-in popup closed by user.");
        // Display a user-friendly message to the user
        alert("Sign-in cancelled. Please try again.");
        // Optionally, redirect them back to a previous page or clear any temporary state.
      } else {
        // Handle other errors
        console.error("Sign-in error:", error);
        alert("An error occurred during sign-in. Please try again later.");
      }
    }
  }

  return (
    <div><button onClick={signInWithGoogle}>Login Using Google</button></div>
  )
}

export default login