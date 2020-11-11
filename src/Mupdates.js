
    import React, { useState } from 'react';
    import index from './index.css';
    
    
    const Mupdates = () => {
        const[s,setState]=React.useState([
            {id:1, img:"../img/anu.jpg", name:"anushka group"},
            {id:2, img:"../img/dhruva.jpg", name:"dhruva group"},
            {id:3, img:"../img/kiran.jpg", name:"kiran group"},
            {id:4, img:"../img/pooja.jpg", name:"pooja group"},
            ]);
    
        
            return(
                <div className="updates">
                    {s.map((up)=>(
                        <div className="updatesc" key={up.id}>
                            <div className="updatesb">
                                <img src={up.img} />
                                <div className="updatesbo">
                                <div className="updatesboimg">
                                <img src={up.img} />
                            </div>
                            <div className="updatesboname">{up.name}</div>
                            </div>
                            </div>
                          </div> 
                    )
                    )}
               
                </div>
            )
        }
    export default Mupdates;