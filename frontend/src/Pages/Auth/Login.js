import React, { useState } from "react";
import axios from 'axios';
import { facebookLogin } from "../../helpers/facebook.js";
import { Link, Redirect } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGooglePlus } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { connect } from 'react-redux';
import { login, signup } from "../../context/actions/auth.js";

const Login = ({login, signup, isAuthenticated}) => {
  
  const [accountCreated, setAccountCreated] = useState(false);

  const initialSignInFormData = Object.freeze({
    email: '',
    password: ''
  })

  const initialSignUpFormData = Object.freeze({
    first_name: '',
    email: '',
    password: '',
    re_password: ''
  })

  const [ signInFormData, updateSignInFormData ] = useState(initialSignInFormData);
  const [ signUpFormData, updateSignUpFormData ] = useState(initialSignUpFormData);

  const handleSignInChange = (e) => {
    updateSignInFormData({
      ...signInFormData,
      [e.target.name]: e.target.value.trim()
    })
  }

  const handleSignUpChange = (e) => {
    updateSignUpFormData({
      ...signUpFormData,
      [e.target.name]: e.target.value.trim()
    })
  }

  const handleSignIn = async (e,key) => {
    e.preventDefault();

    switch (key) {
      case 1:
        // Facebook Login
        const responseFacebook = async (response) => {
          facebookLogin(response.accessToken);
        };
        break;

      case 2:
        // Twitter login
        break;

      case 3:
        // Google Login
        try {
          const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_BASE_URL}/google`);
          window.location.replace(res.data.authorization_url);
        } catch (err) {
          console.log(err)
        }
        break;

      case 4:
        // Github login
        break;

      case 5:
        // Sign Up
        if (
          document.getElementById("sign-up-form")["password-input"].value ===
          document.getElementById("sign-up-form")["re_password-input"].value
        ) {
          signup(
            signUpFormData.first_name,
            signUpFormData.email, 
            signUpFormData.password, 
            signUpFormData.re_password
          )
          setAccountCreated(true);
          document.getElementById("sign-up-form").reset();
        }
        break;

      case 6:
        // Sign In
        login(signInFormData.email, signInFormData.password);
        document.getElementById("sign-in-form").reset();
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

  if(isAuthenticated) {
    return <Redirect to='/timetable' />
  }

  if(accountCreated) {
    return <Redirect to='/check-email' />
  }

  return (
    <>
      <div className="container" id="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={(e) => handleSignIn(e,6)} className="sign-in-form" id="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="bx bxs-user"></i>
                <input
                  type="email"
                  placeholder="Email"
                  id="email-signin"
                  name="email"
                  required
                  onChange={(e) => handleSignInChange(e)}
                />
              </div>

              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password-signin"
                  name="password"
                  minLength="6"
                  required
                  onChange={handleSignInChange}
                />
              </div>
              <button type="submit" className="btn">Login</button>

              <p className="social-text">Forgot Your Password? <Link to='/reset-password'>Reset Passwrod</Link></p>

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

            <form onSubmit={(e) => handleSignIn(e,5)} className="sign-up-form" id="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field ">
                <i className="bx bxs-user"></i>
                <input
                  type="name"
                  placeholder="Name"
                  id="name-input"
                  name="first_name"
                  required
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="input-field ">
                <i className="bx bxs-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  id="email-input"
                  name="email"
                  required
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Password"
                  id="password-input"
                  name="password"
                  required
                  onChange={handleSignUpChange}
                />
              </div>
              <div className="input-field">
                <i className="bx bxs-lock-alt"></i>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="re_password-input"
                  name="re_password"
                  required
                  onChange={handleSignUpChange}
                />
              </div>
              <input
                type="submit"
                className="btn"
                value="Sign up"
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

const mapStateProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateProps, { login, signup })(Login);
