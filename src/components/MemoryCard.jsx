import React, { Component } from 'react';
import '../App.css';

class MemoryCard extends Component {

    state ={
        flipped : false
    }

    flipCard = () => {
      this.setState({
        flipped : true
      })
      this.props.callbackFromParent(this);
        setTimeout(() => {
          this.setState({
            flipped:false
          });
        },1500)
      
  
    }

  

  render() {
    return (
        <div className= {this.props.flipped ? "memory-card flip" : "memory-card"} style={{width: 'calc(25% - 10px)',height: 'calc(33.333% - 10px)',boxShadow:'1px 1px 1px rgba(0,0,0,.3)',transformStyle: 'preserve-3d'}} onClick={() => this.flipCard()}>
        <img className="front-face" src={`/images/${this.props.thmb}.svg`} alt="React" />
        <img className="back-face" src={'/images/js.svg'} alt="JavaScript" />
      </div>
    )
  }
}

export default MemoryCard;