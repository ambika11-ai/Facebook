import {FaFacebook,FaHome,FaUsers,FaGamepad,FaFontAwesomeFlag,FaVideo,FaSistrix, FaPlus, FaCaretDown,
FaBell,} from 'react-icons/fa';
import React from 'react';
import index from './index.css';

const Header = () => {
    return(
        <div className="header">
        <div className="hleft">
        <div className="hleftlogo"> <FaFacebook className="hlogo"/> </div>
        <div className="hsearch"><input type="text" placeholder="search here" className="hbar"/><FaSistrix className="hicon"/> </div>
        </div>
        <div className="hcenter">
        <span className="cIcon">
        <FaHome className="hmicons"/>
        <span className="hnotify">20</span>
        </span>
        <span className="cIcon">
        <FaFontAwesomeFlag className="hmicons"/>
        <span className="hnotify">20</span>
        </span>
        <span className="cIcon">
        <FaVideo className="hmicons"/>
        <span className="hnotify">8</span>
        </span>
        <span className="cIcon">
        <FaUsers className="hmicons"/>
        <span className="hnotify">7</span>
        </span>
        <span className="cIcon">
        <FaGamepad className="hmicons"/>
        <span className="hnotify">14</span>
        </span>
        </div>
        <div className="hlast">
            <span className="hlastpart">
          <FaPlus />
            </span>
            <span className="hlastpart">
          <FaBell />
            </span>
            <span className="hlastpart">
          <FaCaretDown />
            </span>
        </div>
        </div>
    )
}
export default Header;