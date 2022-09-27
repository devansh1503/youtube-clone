import { useContext, useState } from 'react';
import './App.css';
import Home from './components/displaycomps/Home';
import Searchpage from './components/displaycomps/Searchpage';
import Header from './components/Header';
import HiddenSidebar from './components/HiddenSidebar';
import Loginpage from './components/Loginpage';
import Sidebar from './components/Sidebar';
import Globalprovider from './components/store/Globalprovider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Mylibrary from './components/displaycomps/Mylibrary';
import Videoplay from './components/displaycomps/Videoplay';
import Channelpage from './components/displaycomps/Channelpage';
import Categories from './components/Categories';
import CatPage from './components/displaycomps/CatPage';

function App() {
  const [disSidebar, setSidebar] = useState(true)
  const [loggedIn, setLogIn] = useState(true)
  const [progress,setProgress] = useState(0)
  const [disPopup, setDisPopup] = useState(false)
  const [disCat, setDisCat] = useState(true)
  const [catItem, setCatItem] = useState("")
  function changeProgress(n){
    setProgress(n)
  }
  function hidesidebar() {
    if (disSidebar) {
      setSidebar(false)
    }
    else {
      setSidebar(true)
    }
  }
  function loginHandle() {
    if (loggedIn) {
      setLogIn(false)
    }
    else {
      setLogIn(true)
    }
  }
  return (
    <BrowserRouter>
      <Globalprovider>
        {!loggedIn && <Loginpage loginfunc={loginHandle} />}
        {loggedIn && <div className="App">
          <Header hidesidebar={hidesidebar}></Header>
          <LoadingBar color='red' height={3} progress={progress}/>
          <div className='mainbody'>
            {disSidebar && <Sidebar />}
            {!disSidebar && <HiddenSidebar />}
            <div>
            {disCat && <Categories setCatItem={setCatItem}/>}
            <Routes>
              <Route path='/' element={<Home setp={changeProgress} setC={setDisCat}/>}/>
              <Route path='/category' element={<CatPage setC={setDisCat} catitem={catItem}></CatPage>}/>
              <Route path='/search' element={<Searchpage setp={changeProgress} setC={setDisCat}/>}/>
              <Route path='/library' element={<Mylibrary setC={setDisCat}/>}/>
              <Route path='/watch' element={<Videoplay setC={setDisCat}/>}/>
              <Route path='/channel' element={<Channelpage setC={setDisCat}/>}/>
            </Routes>
            </div>
          </div>
        </div>}
      </Globalprovider>
    </BrowserRouter>
  );
}

export default App;
