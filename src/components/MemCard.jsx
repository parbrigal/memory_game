import React from 'react'




const MemCard = (props) => {

  
    
    const flipCard = () => {
        /*
            Prevent additional cards being flipped
        */
        if (props.stopTheClicking)
        return;

      
      
        props.callbackFromParent(props.id); 
    }

        return (
            <div className= {props.flipped ? "memory-card flip" : "memory-card"} style={{width: 'calc(25% - 10px)',height: 'calc(33.333% - 10px)',boxShadow:'1px 1px 1px rgba(0,0,0,.3)',transformStyle: 'preserve-3d'}} onClick={flipCard}>
            <img className="front-face" src={`/images/${props.thmb}.svg`} alt="React" />
            <img className="back-face" src={'/images/mouse.svg'} alt="PSIber Mouse" />
            
          </div>
        )
}

export default MemCard
