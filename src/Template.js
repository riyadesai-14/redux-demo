import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContainer from "./components/UserContainer";
import About from "./components/About";
import { Provider } from "react-redux";
import store from "./redux/store";
function Template() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserContainer />}></Route>
          <Route path="/about/:id" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Template;
