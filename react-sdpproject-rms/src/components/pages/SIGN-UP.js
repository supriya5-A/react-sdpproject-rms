
import React, { useState } from 'react';
import'../../App.css';
import picture from './images/coolestateslogo.png'

export default function SIGN-UP() 
{
  //State
  const [SignUpValues, setSignUpValues] = useState({});
  const [signInValues, setsignInValues] = useState({});

  const changeHandler = (e) => {
    const { value, id } = e.target;
    console.log(value, id);
    setSignUpValues({ ...SignUpValues, [id]: value });
  };

  const signInchangeHandler = (e) => {
    const { value, id } = e.target;
    console.log(value, id);
    setsignInValues({ ...signInValues, [id]: value });
  };

  return (
    <div>
      <div id="main">
        <div
          id="form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(signInValues);
          }}
        >
          <p id="description"></p>
          <div className="form_container d-flex">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div className="">
                <h1
                  className="title"
                  style={{ fontSize: '40px', margin: '0.5px 0.5px 20px 0.5px' }}
                >
                  COOL-ESTATES
                </h1>
                <div>
                <img
                    
                src={picture} alt="pic" width = "400" height = "400"
                  ></img>
                    
                
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <div className="isUser">
                  Already a registerd {' '}

                <h1> LogIn</h1>
                </div>
                
                <div className="form-group">
                  <label id="name-label">
                    Username/E-mail<span className="required">*</span>&nbsp;:
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Name"
                    onChange={signInchangeHandler}
                    id="signInUsername"
                    required
                  />
                </div>
                <div className="form-group">
                  <label id="password-label">
                    Password<span className="required">*</span>&nbsp;:
                  </label>
                  <input
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={signInchangeHandler}
                    required
                    type="password"
                    id="signInPassword"
                  />
                  <div className="forgetPassword">Forget Password?</div>
                </div>
                <div className="form-group" style={{ paddingTop: '0px' }}>
                  <input
                    id="sing-in-submit"
                    className="submit"
                    type="submit"
                  ></input>
                </div>
              </div>
            </div>

            <form
              id="survey-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(SignUpValues);
              }}
              style={{ borderLeft: '5px solid', paddingLeft: '40px' }}
            >
              <h2 id="title" style={{ marginBottom: 0 }}>
                Sign Up
              </h2>
<div className="form-group">
                <label id="name-label">
                  Name<span className="required">*</span>&nbsp;:
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Name"
                  id="name"
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="form-group">
                <label id="email-label">
                  Email<span className="required">*</span>&nbsp;:
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Email "
                  onChange={changeHandler}
                  required
                  type="email"
                  id="email"
                />
              </div>
              <div className="form-group">
                <label id="phone-label">
                  Phone<span className="required">*</span>&nbsp;:
                </label>
                <input
                  className="form-control"
                  placeholder="Enter Phone Number "
                  onChange={changeHandler}
                  required
                  type="phone"
                  id="phone"
                />
              </div>
              <div className="form-group">
                <label id="username-label">
                  User name<span className="required">*</span>&nbsp;:
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Set your username"
                  onChange={changeHandler}
                  required
                  id="username"
                />
              </div>
              <div className="form-group">
                <label id="email-label">
                  Password<span className="required">*</span>&nbsp;:
                </label>
                <input
                  className="form-control"
                  placeholder="Set Password "
                  onChange={changeHandler}
                  required
                  type="password"
                  id="password-signup"
                />
              </div>
              <div className="form-group">
                <label id="email-label">
                  Confirm Password<span className="required">*</span>&nbsp;:
                </label>
                <input
                  className="form-control"
                  placeholder="Confirm Password "
                  onChange={changeHandler}
                  required
                  type="password"
                  id="confirm-password"
                />
              </div>
              <div className="form-group">
                <input
                  id="sign-up-submit"
                  className="submit"
                  type="submit"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}