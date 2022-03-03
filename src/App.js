import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Character from './components/Character'
import CharacterTable from './components/CharacterTable'
import HiraganaChart from './components/HiraganaChart'
import Footer from './components/Footer'

function App() {
  const [characterContent] = useState([
    {
      id: 1,
      character: 'あ',
      reading: 'a',
      description: 0,
    },

    {
      id: 2,
      character: 'い',
      reading: 'i',
      description: 0,
    },

    {
      id: 3,
      character: 'う',
      reading: 'u',
      description: 0,
    },

    {
      id: 4,
      character: 'え',
      reading: 'e',
      description: 0,
    },

    {
      id: 5,
      character: 'お',
      reading: 'o',
      description: 0,
    },
  ])

  const [characterContentK] = useState([
    {
      id: 6,
      character: 'か',
      reading: 'ka',
      description: 0,
    },

    {
      id: 7,
      character: 'き',
      reading: 'ki',
      description: 0,
    },

    {
      id: 8,
      character: 'く',
      reading: 'ku',
      description: 0,
    },

    {
      id: 9,
      character: 'け',
      reading: 'ke',
      description: 0,
    },

    {
      id: 10,
      character: 'こ',
      reading: 'ko',
      description: 0,
    },
  ])

  const [characterContentS] = useState([
    {
      id: 11,
      character: 'さ',
      reading: 'sa',
      description: 0,
    },

    {
      id: 12,
      character: 'し',
      reading: 'shi',
      description: 0,
    },

    {
      id: 13,
      character: 'す',
      reading: 'su',
      description: 0,
    },

    {
      id: 14,
      character: 'せ',
      reading: 'se',
      description: 0,
    },

    {
      id: 15,
      character: 'そ',
      reading: 'so',
      description: 0,
    },
  ])


  const [characterContentT] = useState([
    {
      id: 16,
      character: 'た',
      reading: 'ta',
      description: 0,
    },

    {
      id: 17,
      character: 'ち',
      reading: 'chi',
      description: 0,
    },

    {
      id: 18,
      character: 'つ',
      reading: 'tsu',
      description: 0,
    },

    {
      id: 19,
      character: 'て',
      reading: 'te',
      description: 0,
    },

    {
      id: 20,
      character: 'と',
      reading: 'to',
      description: 0,
    },
  ])

  const [characterContentN] = useState([
    {
      id: 21,
      character: 'な',
      reading: 'na',
      description: 0,
    },

    {
      id: 22,
      character: 'に',
      reading: 'ni',
      description: 0,
    },

    {
      id: 23,
      character: 'ぬ',
      reading: 'nu',
      description: 0,
    },

    {
      id: 24,
      character: 'ね',
      reading: 'ne',
      description: 0,
    },

    {
      id: 25,
      character: 'の',
      reading: 'no',
      description: 0,
    },
  ])

  const [characterContentH] = useState([
    {
      id: 26,
      character: 'は',
      reading: 'ha',
      description: 0,
    },

    {
      id: 27,
      character: 'ひ',
      reading: 'hi',
      description: 0,
    },

    {
      id: 28,
      character: 'ふ',
      reading: 'fu',
      description: 0,
    },

    {
      id: 29,
      character: 'へ',
      reading: 'he',
      description: 0,
    },

    {
      id: 30,
      character: 'ほ',
      reading: 'ho',
      description: 0,
    },
  ])

  const [characterContentM] = useState([
    {
      id: 31,
      character: 'ま',
      reading: 'ma',
      description: 0,
    },

    {
      id: 32,
      character: 'み',
      reading: 'mi',
      description: 0,
    },

    {
      id: 33,
      character: 'む',
      reading: 'mu',
      description: 0,
    },

    {
      id: 34,
      character: 'め',
      reading: 'me',
      description: 0,
    },

    {
      id: 35,
      character: 'も',
      reading: 'mo',
      description: 0,
    },
  ])

  const [characterContentY] = useState([
    {
      id: 36,
      character: 'や',
      reading: 'ya',
      description: 0,
    },

    {
      id: 37,
      character: 'null',
      reading: 'null',
      description: 0,
    },

    {
      id: 38,
      character: 'ゆ',
      reading: 'yu',
      description: 0,
    },

    {
      id: 39,
      character: 'null',
      reading: 'null',
      description: 0,
    },

    {
      id: 40,
      character: 'よ',
      reading: 'yo',
      description: 0,
    },
  ])

  const [characterContentR] = useState([
    {
      id: 41,
      character: 'ら',
      reading: 'ra',
      description: 0,
    },

    {
      id: 42,
      character: 'り',
      reading: 'ri',
      description: 0,
    },

    {
      id: 43,
      character: 'る',
      reading: 'ru',
      description: 0,
    },

    {
      id: 44,
      character: 'れ',
      reading: 're',
      description: 0,
    },

    {
      id: 45,
      character: 'ろ',
      reading: 'ro',
      description: 0,
    },
  ])

  const [characterContentW] = useState([
    {
      id: 46,
      character: 'わ',
      reading: 'wa',
      description: 0,
    },

    {
      id: 47,
      character: 'null',
      reading: 'null',
      description: 0,
    },

    {
      id: 48,
      character: 'null',
      reading: 'null',
      description: 0,
    },

    {
      id: 49,
      character: 'null',
      reading: 'null',
      description: 0,
    },

    {
      id: 50,
      character: 'を',
      reading: 'wo',
      description: 0,
    },
  ])

  const [characterContentNN] = useState([
    {
      id: 51,
      character: 'ん',
      reading: 'n',
      description: 0,
    },
  ])

  //Toggle Short Info
  const dropDownInfo = () => {
    var navBar = document.getElementById("navActive");
    var navBarStyle = getComputedStyle(navBar);
    if (navBarStyle.getPropertyValue('visibility') == "hidden"){
      navBar.style.visibility = 'visible';
      navBar.style.opacity = 1;
      console.log(navBarStyle.getPropertyValue('visibility'));
    } else {
      navBar.style.visibility = 'hidden';
      navBar.style.opacity = 0;
    }
  }

  //To avoid people spam pressing the sideScroll()
  var scrollActive = 0;

  //Credit https://stackoverflow.com/questions/24635884/is-there-a-way-to-make-horizontal-scrolling-smoother
  const sideScroll = (element,direction,speed,distance,step) => {
  var scrollAmount = 0;
  scrollActive = 1;
  var slideTimer = setInterval(function(){
      if(direction == 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
          scrollActive= 0;
      }
  }, speed);
  }

  //Toggle Quick Sidescroll
  const characterQuickAccess = () => {
    var characterTable = document.getElementsByClassName("characterTablePadding");
    var characterTableScroll = Math.round(characterTable[0].scrollLeft);
    //Credit https://stackoverflow.com/questions/5138373/how-do-i-get-the-max-value-of-scrollleft
    var characterTableMax = (characterTable[0].scrollWidth - characterTable[0].clientWidth)*1.2;
    if (scrollActive === 0){
      if (characterTableScroll > -160){
        //Transition
        sideScroll(characterTable[0], 'left', 10, characterTableMax, 10);
      } else {
        //Transition
        sideScroll(characterTable[0], 'right', 10, characterTableMax, 10);
      }
    }
  }

  return (
    <div>
    <div className="App">
      <Header title="Welcome" onToggle={dropDownInfo}/>
    <Routes>
    <Route path = "/" element={
        <div className= "characterTable">
          <div className = "characterTableContainer">
          {/*CharacterTableInfo*/}
          <div className= "characterTableInfoColumn">
            <div className= "characterTableInfoColumnContent">
              <p>a</p>
            </div>
            <div className= "characterTableInfoColumnContent">
              <p>i</p>
            </div>
            <div className= "characterTableInfoColumnContent">
              <p>u</p>
            </div>
            <div className= "characterTableInfoColumnContent">
              <p>e</p>
            </div>
            <div className= "characterTableInfoColumnContent">
              <p>o</p>
            </div>
          </div>
          {/*CharacterTablePadding*/}
            <div className= "characterTablePadding">
            {/*CharacterContent*/}
            {characterContent.length > 0 ? <CharacterTable characterContent={characterContent} margin="20px"/>
            : 'No Database'}
            {/*CharacterContentK*/}
            {characterContentK.length > 0 ? <CharacterTable characterContent={characterContentK} letter="k" color="#FF00AA"/>
            : 'No Database'}
            {/*CharacterContentS*/}
            {characterContentS.length > 0 ? <CharacterTable characterContent={characterContentS} letter="s" color="#AA00FF"/>
            : 'No Database'}
            {/*CharacterContentT*/}
            {characterContentT.length > 0 ? <CharacterTable characterContent={characterContentT} letter="t"/>
            : 'No Database'}
            {/*CharacterContentN*/}
            {characterContentN.length > 0 ? <CharacterTable characterContent={characterContentN} letter="n" color="#FF00AA"/>
            : 'No Database'}
            {/*CharacterContentH*/}
            {characterContentH.length > 0 ? <CharacterTable characterContent={characterContentH} letter="h" color="#AA00FF"/>
            : 'No Database'}
            {/*CharacterContentM*/}
            {characterContentM.length > 0 ? <CharacterTable characterContent={characterContentM} letter="m"/>
            : 'No Database'}
            {/*CharacterContentY*/}
            {characterContentY.length > 0 ? <CharacterTable characterContent={characterContentY} letter="y" color="#FF00AA"/>
            : 'No Database'}
            {/*characterContentR*/}
            {characterContentR.length > 0 ? <CharacterTable characterContent={characterContentR} letter="r" color="#AA00FF"/>
            : 'No Database'}
            {/*CharacterContentW*/}
            {characterContentW.length > 0 ? <CharacterTable characterContent={characterContentW} letter="w"/>
            : 'No Database'}
            {/*CharacterContentN*/}
            {characterContentNN.length > 0 ? <CharacterTable characterContent={characterContentNN} letter="nn" color="#FF00AA"/>
            : 'No Database'}
            </div>
            <div className="characterTableQuick" onClick={characterQuickAccess}>
              <p>Quick Scroll</p>
              <img src={'./img/menu/returnDark.svg'} alt="QuickAccess"/>
              <div className="imgInverse">
                <img src={'./img/menu/returnDark.svg'} alt="QuickAccess"/>
              </div>
            </div>
          </div>
        </div>
    }>
    </Route>
    <Route path=":characterId" element={ <Character />}/>
    <Route path="chart" element={ <HiraganaChart />}/>
    </Routes>
    <Footer />
      </div>
    </div>
  );
}

export default App;
