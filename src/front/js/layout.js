import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { useEffect, useState } from "react";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login";
import { Signup } from "./component/signup";
//create your first component



const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const {actions,store} = useContext(Context)
useEffect(()=>{
const token = localStorage.getItem("token")
if(!!token){

 actions.setToken(token)
}

},[])

  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
         
          {store.token && <Navbar />}

          <Routes>
            <Route element={<Login setLoggedIn={setLoggedIn} />} path="/" />
            <Route element={store.token && <Home />} path="/home" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Signup />} path="/signup" />

            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {store.token && <Footer />}
        </ScrollToTop>
      </BrowserRouter>
    
    </div>
  );
};

export default injectContext(Layout);
