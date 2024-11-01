import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


export const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();

  async function signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("Sign-in successful:", user);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
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
    <div className="w-full flex flex-col justify-center items-center gap-[4rem]">
      <div className="w-full flex flex-col gap-5 text-[3rem] font-bold tracking-widest leading-tight text-center dark:text-zinc-400">
        <h1>Get</h1>
        <h1>Your</h1>
        <h1>Tasks</h1>
        <h1>Done</h1>
        <h1>Fast!</h1>
      </div>
      <button
        onClick={signInWithGoogle}
        className="loginbutton font-bold rounded-[3em] text-lg  w-full max-w-xs h-16 
       bg-[#ffa31a] text-[#222121de] flex  justify-start items-center text-center gap-3 shadow-inner shadow-gray-500
        hover:bg-[#ffb300] transition-colors cursor-pointer px-5 py-2 box-border border-2 border-gray-400"
      >
        <FaGoogle className="text-3xl" />
        <label className="grow mr-12">Login</label>
      </button>
    </div>
  );
};

export default Login;
