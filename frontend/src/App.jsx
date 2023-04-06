import "./App.css";
import MainComponent from "./MainComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { useEffect } from "react";
// import { account } from "./utils";
function App() {
  // useEffect(() => {
  //   const createAnonymousSession = async() => {
  //     try{
  //       console.log(account)
  //       const session = await account.create();
  //       console.log(session)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   createAnonymousSession()
  // }, []);

  return (
    <>
      <ToastContainer />
      <MainComponent />
    </>
  );
}

export default App;
