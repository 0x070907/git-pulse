import { useState } from 'react';

import UsernameInput from './pages/UsernameInput/UsernameInput';
import LoadingScreen from './pages/Loading/Loading';

import './App.css'

export default function App() {
  const [username,setUsername] = useState("");
  const [page,setPage] = useState("inputPage");
  
  function handleAnalyse(username){
    setUsername(username);
    setPage("loading");
  }

  return (
    <>
      {page === "inputPage" && <UsernameInput Analyse={handleAnalyse}/> }
      {page === "loading" && <LoadingScreen/>}
    </>
  )
}

