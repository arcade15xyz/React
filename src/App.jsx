import './App.css';
import logo from './assets/logo.png';
import Language from './components/language';
import Sidebar from './components/sidebar';
import { useState } from 'react';

function App() {
  const langContainer =[
    {
      id:0,
      country:'China',
      paragraph:`你好！我很好，谢谢你的关心。😊

我喜欢你积极放松的心态！在实现目标的同时保持轻松的心情确实是个不错的方式。如果你需要任何帮助，请告诉我，我在这里帮助你！`
    },
    {
      id:1,
      country:'England',
      paragraph:`Hello! I'm doing great, thank you for asking. 😊

I love your positive and relaxed mindset! Taking it easy while achieving goals is definitely a good approach. Let me know if you need any help with anything, I'm here to assist you!`
    },
    {
      id:2,
      country:"Japan",
      paragraph:`こんにちは！元気です、聞いてくれてありがとう。😊

あなたの前向きでリラックスした考え方が好きです！目標を達成しながらも、無理せずに行動することは確かに良い方法ですね。何か手助けが必要なときは教えてください、私はここでお手伝いします！`
    }
  ];

  const [currentLanguage , setCurrentLanguage]=useState({
    id:null,
    country:'',
    paragraph:'',
  });

  function handleCountry(presentId){
    console.log(presentId);
    setCurrentLanguage(()=>{
      return(
      langContainer.find(item => item.id===presentId)
      );
    });
    
  }
  const [sideToggle,setSideToggle]=useState(false);

  function handleSideBar(){
    setSideToggle((prev)=> !prev);
  }
  return (
    <>
      <div className='  bg-black w-[100vw] h-[100vh] overflow-y-hidden overflow-x-hidden'>
        <header className='w-full flex relative px-2 pt-10'>
        
          <div className=' flex items-end w-[150rem]'>
            <a href='#'>
              <img src={logo} width="100rem" alt='Language' className=' object-contain bg-no-repeat'/>
            </a>
            <h1 className=' font-rubik text-7xl tracking-wider text-amber-700'>Language</h1>
          </div>

          <div onClick={handleSideBar} className=' absolute right-4 bottom-5 group z-50 cursor-pointer'>
            <i className="fa-solid fa-bars text-amber-700 text-4xl group-hover:text-amber-800 hover:brightness-200 "></i>
          </div>

          <Sidebar active={sideToggle} languageToggle={handleCountry}></Sidebar>
        </header>
        <main>
          <Language language={currentLanguage}></Language>
        </main>
      </div>
    </>
  )
}

export default App
