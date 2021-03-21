import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import firebaseConfig from "./firebase.config";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

firebase.initializeApp(firebaseConfig);

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });
   
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const singnedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
        };
        setUser(singnedOutUser);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  };
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.name.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
          updateUserName(user.name);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    e.preventDefault();
  };

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated successfuly");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="form">
     
      <h1>{newUser ? "Register" : "Login"}</h1>
      
      <form onSubmit={handleSubmit}>
        {newUser && (
          <input className="input-field"
            type="text"
            name="name"
            onBlur={handleBlur}
            placeholder="Enter your name"
            id=""
            required
          />
        )}
        <br />
        <input className="input-field"
          type="text"
          name="email"
          onBlur={handleBlur}
          placeholder="Enter your email"
          id=""
          required
        />
        <br />
        <input className="input-field"
          type="password"
          name="password"
          onBlur={handleBlur}
          placeholder="Enter your password"
          required
          id=""
        />
        <br />
        <input className="signin-btn input-field btn btn-success" type="submit" value={newUser ? "Sign Up" : "Sign In"} />
      </form>
      {/* <p style={{color:'red'}}>{user.error}</p> */}
      {user.success ? (
        <p style={{ color: "green" }}>
          User {newUser ? "created" : "logged in"} successfuly
        </p>
      ) : (
        <p style={{ color: "red" }}>{user.error}</p>
      )}
      <label htmlFor="newUser">Created an account</label>
      <input
        type="checkbox"
        name="newUser"
        onChange={() => setNewUser(!newUser)}
        id=""
      />
      <br/>
       <div className="google-box">
       {user.isSignedIn ? (
        <button className="btn btn-danger google-btn" onClick={handleSignOut}>Sign out:</button>
      ) : (
        <button className="btn btn-danger google-btn" onClick={handleSignIn}>Sign in with google</button>
      )}
       </div>
    </div>
  );
}

export default Login;
