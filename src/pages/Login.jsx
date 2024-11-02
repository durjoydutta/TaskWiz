import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react"; // Added useState

const Login = () => {
  const [user] = useAuthState(auth);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const navigate = useNavigate();
  const [isAutoLogin, setIsAutoLogin] = useState(true);
  const googleProvider = new GoogleAuthProvider(); // Create GoogleAuthProvider instance

  const signInWithGoogle = async () => {
    setIsAutoLogin(false);
    try {
      await signInWithPopup(auth, googleProvider); // Use googleProvider
      setSignInSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    const authenticateWithToken = async () => {
      try {
        setSignInSuccess(true);
      } catch (error) {
        console.error("Error during automatic login:", error);
        localStorage.removeItem("authToken");
      }
    };

    if (storedToken && !user) {
      authenticateWithToken();
    } else if (user && signInSuccess && isAutoLogin) {
      navigate("/");
      setSignInSuccess(false);
    }
  }, [user, signInSuccess, navigate, isAutoLogin]);

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
        onClick={user ? signOut : signInWithGoogle}
        className="loginbutton font-bold rounded-[3em] text-2xl w-full max-w-xs h-16 
        bg-[#ffa31a] text-[#222121de] flex justify-start items-center text-center gap-3 shadow-inner shadow-gray-500
        hover:bg-[#ffb300] transition-colors cursor-pointer px-5 py-2 box-border border-2 border-gray-400"
      >
        {user ? (
          <label className="grow">Sign Out</label>
        ) : (
          <div className="flex gap-2 justify-between w-full">
            <FaGoogle className="text-3xl" />
            <label className="grow mr-10">Login</label>
          </div>
        )}
      </button>
    </div>
  );
};

export default Login;