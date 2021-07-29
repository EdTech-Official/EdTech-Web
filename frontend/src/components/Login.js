import React, { useContext, useEffect } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  githubProvider,
  twitterProvider,
  db,
} from "../firebase";
import { FaFacebook, FaGithub, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AuthContext } from "../Auth";

const Login = () => {
  const {
    setCurrentUser,
    collegeOptions,
  } = useContext(AuthContext);

  useEffect(() => {
    if(collegeOptions[0] === undefined){
      db.collection("colleges")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          collegeOptions.push(doc.data());
        });
      })
      .then(() => {
        
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSignIn = (key) => {
    switch (key) {
      case 1:
        auth
          .signInWithPopup(facebookProvider)
          .then((result) => {
            var user = result.user;
            setCurrentUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case 2:
        auth
          .signInWithPopup(twitterProvider)
          .then((result) => {
            var user = result.user;
            setCurrentUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case 3:
        auth
          .signInWithPopup(googleProvider)
          .then((result) => {
            var user = result.user;
            setCurrentUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case 4:
        auth
          .signInWithPopup(githubProvider)
          .then((result) => {
            var user = result.user;
            setCurrentUser(user);
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case 5:
        if (
          document.getElementById("sign-up-form")["password-input"].value ===
          document.getElementById("sign-up-form")["cpassword-input"].value
        ) {
          auth
            .createUserWithEmailAndPassword(
              document.getElementById("sign-up-form")["email-input"].value,
              document.getElementById("sign-up-form")["password-input"].value
            )
            .then((result) => {
              var user = result.user;
              setCurrentUser(user);
            });
          document.getElementById("sign-up-form").reset();
        }
        break;

      case 6:
        auth
          .signInWithEmailAndPassword(
            document.getElementById("sign-in-form")["email-signin"].value,
            document.getElementById("sign-in-form")["password-signin"].value
          )
          .then((result) => {
            var user = result.user;
            setCurrentUser(user);
          });
          // Has to be checked whether form has to be reset
        // document.getElementById("sign-in-form").reset();
        break;

      default:
        break;
    }
  };

  const switchToSignUp = () => {
    document.getElementById("container").classList.add("sign-up-mode");
  };

  const switchToSignIn = () => {
    document.getElementById("container").classList.remove("sign-up-mode");
  };

  return (
    <>
      <div className="container" id="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" id="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="bx bxs-user"></i>
                <input
                  type="email"
                  placeholder="Email"
                  id="email-signin"
                  required
                />
              </div>

              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password-signin"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn"
                onClick={() => handleSignIn(6)}
              >Login</button>

              <p className="social-text">Or Sign In with Social Platforms</p>

              <div className="social-media">
                <div className="social-icon" onClick={() => handleSignIn(1)}>
                  <FaFacebook />
                </div>
                <div className="social-icon" onClick={() => handleSignIn(2)}>
                  <AiFillTwitterCircle />
                </div>
                <div className="social-icon" onClick={() => handleSignIn(3)}>
                  <FaGooglePlus />
                </div>
                <div className="social-icon" onClick={() => handleSignIn(4)}>
                  <FaGithub />
                </div>
              </div>
            </form>

            <form action="#" className="sign-up-form" id="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field ">
                <i className="bx bxs-user"></i>
                <input
                  type="email"
                  placeholder="Email"
                  id="email-input"
                  required
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password-input"
                  required
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="cpassword-input"
                  required
                />
              </div>
              <input
                type="submit"
                className="btn"
                value="Sign up"
                onClick={() => handleSignIn(5)}
              />

              <p className="social-text">Or Sign Up with Social Platforms</p>

              <div className="social-media">
                <div className="social-icon" onClick={() => handleSignIn(1)}>
                  <FaFacebook />
                </div>
                <div className="social-icon" onClick={() => handleSignIn(2)}>
                  <AiFillTwitterCircle />
                </div>
                <div className="social-icon" onClick={() => handleSignIn(3)}>
                  <FaGooglePlus />
                </div>
                <div className="social-icon" onClick={() => handleSignIn(4)}>
                  <FaGithub />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Register now to get access to Notes, Textbooks, Timebable and
                Many More..
              </p>
              <button
                className="btn transparent sign-up-btn"
                id="sign-up-btn"
                onClick={switchToSignUp}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btn transparent sign-in-btn"
                id="sign-in-btn"
                onClick={switchToSignIn}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
