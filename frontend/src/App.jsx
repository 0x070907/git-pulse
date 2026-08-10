import { useState } from 'react';

import UsernameInput from './pages/UsernameInput/UsernameInput';
import LoadingScreen from './pages/Loading/Loading';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css'

export default function App() {

  const [username,setUsername] = useState("");
  const [page,setPage] = useState("inputPage");
  const [data,setData] = useState(null);
  
  function handleAnalyse(username){
    setUsername(username);
    setPage("loading");
  }


  return (
    <>
      {page === "inputPage" && <UsernameInput Analyse={handleAnalyse}/> }
      {page === "loading" && <LoadingScreen user={username} handleData={(data) => {
            setData(data);
            setPage("dashboard")
          }
        }
      />}

      {data && page=="dashboard" && <Dashboard data = {data}/>} 
    </>
  )
}

