
    import React, { useState } from 'react';
    import index from './index.css';
    import Mupdates from './Mupdates';
    import Status from './Status';
    import Mnews from './Mnews';
    
    const M = () => {
        
        return(
            <div className="M">
               <Mupdates/>
               <Status/>
               <Mnews/>
           
            </div>
        )
    }
    export default M;