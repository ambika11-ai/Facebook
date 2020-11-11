
    import React, { useState } from 'react';
    import index from './index.css';

    
    const Mnews = () => {
        const[s,setState]=React.useState([
            {id:1, userImg:"../img/anu.jpg", name:"anushka ", time:"1h", text:"find me at bigboss", postImg:"../img/anu.jpg"},
            {id:2, userImg:"../img/kiran.jpg", name:"dhruva " ,time:"2h",text:"bigboss contestant and indian film actor",postImg:"../img/kiran.jpg"},
        
            ]);
    
        
        return(
            <div className="news">
            {s.map((post)=>(
                <div key={post.id} className="empty">
                    <div className="newsheader">
                    <div className="newsheaderimg">
                        <img src={post.userImg } alt="user" />
                    </div>
                    <div className="newsheadername">
                        {post.name}
                        <div className="date"> {post.time} </div>      
                        </div> 
                        </div>
                        <div className="newsbody">
                             <div className="newsbodytext">{post.text}</div>
                             <div className="newsbodyimg"> <img src={post.postImg} alt="post" /></div>
                             </div>
                             <div className="newsr">
                                  <div className="r"></div>
                                  </div>
                             </div>
                             

            )
            )}
            </div>
        )
    }
    export default Mnews;