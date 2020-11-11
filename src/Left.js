
    import React, { useState } from 'react';
    import index from './index.css';
    
    const Left = () => {
        const[lg,setState]=React.useState([
        {id:1, img:"../img/anu.jpg", name:"anushka group"},
        {id:2, img:"../img/dhruva.jpg", name:"dhruva group"},
        {id:3, img:"../img/kiran.jpg", name:"kiran group"},
        {id:4, img:"../img/pooja.jpg", name:"pooja group"},
        {id:5, img:"../img/yash.jpg", name:"yash group"},
        ]);


        return(
            <div className="left">
                {lg.map((i)=>(
                    <div className="leftl" key={i.id}>
                        <div className="leftimg">
                            <img src={i.img} />
                        </div>
                        <div className="leftlname">{i.name}</div>
                        </div>
                )
                
                
                
                )}
           
            </div>
        )
    }
    export default Left;