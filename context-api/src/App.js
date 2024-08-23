import logo from './logo.svg';
import './App.css';
import UserInfoContext from "./context/UserInfoContext";
import BlogPage from './components/BlogPage';
import { ThemeProvider } from './context/ThemeProvider';
import ContentComponent from './components/ContentComponent';
import {React,useState} from 'react';
import ThemeContext from './context/ThemeContext';


function App() {
  // const loggedUser={
  //   userName:"Akhil",
  //   isAdmin:"true"
  // }
  const [theme,setTheme]=useState('light');
  const toggleTheme=()=>{
    // setTheme(prevTheme => (prevTheme==='light'?'dark':'light'));
    theme=='light'?setTheme('dark'):setTheme('light');
  };


  return (
    // <UserInfoContext.Provider value={loggedUser}>
    //   <BlogPage/>
    // </UserInfoContext.Provider>
    

    //Brute force way
    <ThemeContext.Provider value={{theme,toggleTheme}}>
       <ContentComponent/>
    </ThemeContext.Provider>

    // More sophisticated and architectural
     // <ThemeProvider>
    //   <ContentComponent/>
    // </ThemeProvider>
    
  );
}

export default App;
