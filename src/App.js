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
  const [progress, setProgress] = useState(0)
  const [disPopup, setDisPopup] = useState(false)
  const [disCat, setDisCat] = useState(true)
  const [catItem, setCatItem] = useState("")
  const [lightMode, setLight] = useState(true)
  if (lightMode) {
     document.body.style.backgroundColor = 'white'
     document.body.style.color = 'black'
  }
  else{
    document.body.style.backgroundColor = 'rgb(24,24,24)'
  }
  function changeProgress(n) {
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
          <Header hidesidebar={hidesidebar} ltm={lightMode} setltm={setLight}></Header>
          <LoadingBar color='red' height={3} progress={progress} />
          <div className='mainbody'>
            {disSidebar && <Sidebar ltm={lightMode} />}
            {!disSidebar && <HiddenSidebar ltm={lightMode} />}
            <div>
              {disCat && <Categories setCatItem={setCatItem} ltm={lightMode} />}
              <Routes>
                <Route path='/' element={<Home ltm={lightMode} setp={changeProgress} setC={setDisCat} />} />
                <Route path='/category' element={<CatPage ltm={lightMode} setC={setDisCat} catitem={catItem}></CatPage>} />
                <Route path='/search' element={<Searchpage ltm={lightMode} setp={changeProgress} setC={setDisCat} />} />
                <Route path='/library' element={<Mylibrary ltm={lightMode} setC={setDisCat} />} />
                <Route path='/watch' element={<Videoplay ltm={lightMode} setC={setDisCat} />} />
                <Route path='/channel' element={<Channelpage ltm={lightMode} setC={setDisCat} />} />
              </Routes>
            </div>
          </div>
        </div>}
      </Globalprovider>
    </BrowserRouter>
  );
}

export default App;
