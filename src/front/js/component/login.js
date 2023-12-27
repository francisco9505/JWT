import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {Context} from "../store/appContext"
import { useLinkClickHandler } from "react-router-dom";

export const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const {actions} = useContext(Context)

  const  handleLogin = async () => {
    if (email !== "" && password !== "") {
     const token  = await actions.setupdateToken(email,password)
     if (!!token){
      navigate('/home')
     }
    }


  };

  

  
  return (
    <>
      <div className="login">
        <div>
          <form>
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form2Example1"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                  <label class="form-check-label" for="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-primary btn-block mb-4"
              onClick={handleLogin}
            >
              Sign in
            </button>

            <div class="text-center">
              <p>
                Not a member?
                <Link to="/signup">
                  <a href="#!">Register</a>
                </Link>
              </p>
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
