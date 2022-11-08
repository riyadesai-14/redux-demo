import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
// import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
// import IceCreamContainer from "./components/IceCreamContainer";
// import NewCakeContainer from "./components/NewCakeContainer";
// import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App"><br /><br />
      {/* ------------------ ownProps -------------------------------

      <ItemContainer cake/>
      <ItemContainer /><br /><br />
      ----------------HooksContainer-------------------------------
        <HooksCakeContainer /><br /><br />
        ---------------CakeContainer---------------------------------
        <CakeContainer /><br /><br />
        ---------------IceCreamContainer------------------------------
        <IceCreamContainer /><br /><br />
        ------------------NewContainer------------------------
        <NewCakeContainer />
      */}
     <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
