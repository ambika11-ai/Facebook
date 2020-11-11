
    import React from 'react';
    import index from './index.css';
    
    const Freindlist = () => {
        const[state,setState]=React.useState([
            {id:1, img:"../img/anu.jpg", name:"anushka "},
            {id:2, img:"../img/dhruva.jpg", name:"dhruva "},
            {id:3, img:"../img/kiran.jpg", name:"kiran "},
            {id:4, img:"../img/pooja.jpg", name:"pooja"},
            ]);
        return(
            <div className="freind">
                 {state.map((f)=>(
                    <div className="friendlist" key={f.id}>
                        <div className="freindlistimg">
                            <img src={f.img} />
                           <span className="s"></span>
                        </div>
                        <div className="freindlistname">{f.name}</div>
                        </div>
                )
                
                
                
                )}
       
            </div>
        )
    }
    export default Freindlist;