import { Button } from "@material-ui/core";
import "./css/Login.css";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { useEffect } from "react";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const googleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  // Save th data into local storage so when page Refresh data remains in state
  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      JSON.parse(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  });

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
          width='60'
          height='60'
          alt='wp logo'
        />
        <div className='login__text'>
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type='submit' onClick={googleSignIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
