import React, { useContext } from 'react'
import "./Main.css"
import profilePic from '../../assets/profile.jpg';
import { Plus, Mic, SendHorizontal } from 'lucide-react';
import gemini_icon from '../../assets/gemini_icon.png';
import { Context } from '../../context/Context.jsx';


const Main = () => {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={profilePic} alt="Profile Pic" />
      </div>

      <div className="mainContainer">
        {!showResult ?
          <>
            <div className="greet">
              <p><span>Hello, Abhishek</span></p>
            </div>
          </> :
          <div className='result'>
            <div className="resultTitle">
              <div className="backDiv">
                <p>{recentPrompt}</p>
              </div>
            </div>

            <div className="resultData">
              <img src={gemini_icon} alt="Gemini Icon" />
              {loading ?
              <div className='loader'>
                Just a second...
              </div> :
              <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
            </div>
          </div>
        }

      </div>

      <div className="mainBottom">
        <div className="searchBox">
          <input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Ask Gemini' />
          <div className="searchButtons">
            <div className="section1">
              <Plus className='searchIcon' />
              <button>
                <span class="material-symbols-outlined">
                  travel_explore
                </span>
                <span>Deep Research</span>
              </button>
            </div>

            <div className="section2">
              <Mic className='searchIcon' />
              <SendHorizontal className='searchIcon' onClick={() => onSent()} />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Main