import React, { useState } from 'react';
import "./Sidebar.css";

// icons imported from lucide library
import { Menu, Plus, AlignLeft, Gem, CircleHelp, History, Settings } from 'lucide-react';

const Sidebar = () => {
  const [extended, setExtended] = useState(true); 

  return (
    <div className={`sideBar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <Menu onClick={() => setExtended(prev => !prev)} className='icons menu' />

        <div className="newChat">
          <Plus className="icons chat" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className='recentTitle'>Recent</p>
            <div className="recentEntry">
              <AlignLeft className="icons msg" />
              <p>What is React...</p>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottomItem recentEntry">
          <Gem className="icons" />
          {extended && <p>Gem Manager</p>}
        </div>

        <div className="bottomItem recentEntry">
          <CircleHelp className="icons" />
          {extended && <p>Help</p>}
        </div>

        <div className="bottomItem recentEntry">
          <History className="icons" />
          {extended && <p>Activity</p>}
        </div>

        <div className="bottomItem recentEntry">
          <Settings className='icons' />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
