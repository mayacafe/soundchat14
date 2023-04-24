import React,{useEffect,useState} from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Router from "./routes";
//import AudioPlayers from "../src/pages/AudioPlayer";
import AudioPlayers from "./pages/AudioPlayers";

export default function MainApp() {
  const Location = localStorage.getItem("locationpath")
  const [oldlocation,setoldlocation]=useState("/")
  const [locationstatus,setlocationstatus]=useState("/")

  //  window.location.reload(true)
  const data= (location)=>{
    localStorage.setItem("locationpath",location)
    setoldlocation(location)

    // window.location.reload(false)
  }
  useEffect(()=>{
    setlocationstatus(oldlocation)
  },[oldlocation])
  return (
    <>
        {(locationstatus==='/')?<>
     <AudioPlayers props={data}/>
      <Router />
       </>:<>
       <Router />
      <AudioPlayers props={data}/></>}
      <ToastContainer/>

    </>
  );
}