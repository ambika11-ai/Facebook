
    import React, { useState } from 'react';
    import { FaGrinAlt, FaRegFileImage, FaVideo } from 'react-icons/fa';
    import index from './index.css';

    
    const Status = () => {
        
        return(
            <div className="status">
              <div className="statusf">
              <div className="statusfimg">
              <span>
                  <img src="/img/kiran.jpg" />
                </span>
                  </div>  
                  <div className="statusfin"> 
              <input type="text" className="statusfinp" placeholder="put your thoughts here" />
                  </div>  
                  </div>  
                  <div className="statusse">
                     <span className="statuseicon"> 
                  <FaVideo className="live"/> 
                  <span className="text"> Live</span>
                  </span>
                  <span className="statuseicon"> 
                  <FaRegFileImage className="photo"/>
                  <span className="text"> photos</span>
                  </span>
                  <span className="statuseicon"> 
                  <FaGrinAlt className="feeling"/>
                  <span className="text"> feelings</span>
                  </span>
                  </div>
            </div>
        )
    }
    export default Status;