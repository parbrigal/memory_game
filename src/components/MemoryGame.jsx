import React, { Component } from "react";
import MemCard from "./MemCard";

class MemoryGame extends Component {
  state = {
    cardList: [
      { id: 0, cardType: "react", flipped: false },
      { id: 1, cardType: "react", flipped: false },
      { id: 2, cardType: "angular", flipped: false },
      { id: 3, cardType: "angular", flipped: false },
      { id: 4, cardType: "aurelia", flipped: false },
      { id: 5, cardType: "aurelia", flipped: false },
      { id: 6, cardType: "backbone", flipped: false },
      { id: 7, cardType: "backbone", flipped: false },
      { id: 8, cardType: "vue", flipped: false },
      { id: 9, cardType: "vue", flipped: false },
      { id: 10, cardType: "ember", flipped: false },
      { id: 11, cardType: "ember", flipped: false }
    ],
    hasFlippedCard: false,
    firstCard: null,
    stopTheClicking : false
  };

  handleFlip = type => {
       const { cardList } = this.state;
       // 1. Make a shallow copy of the items
       let newCardListData = [ ...cardList ];
        // 2. Make a shallow copy of the item you want to mutate
        let item = {...cardList[type]};
        // 3. Replace the property you're intested in
        item.flipped = true
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        newCardListData[type] = item 
        // 5. Set the state to our new copy
        this.setState({
          cardList:newCardListData,
        });

        if (!this.state.hasFlippedCard)
        {
          this.setState({
            hasFlippedCard:true,
            firstCard: type
          })
        }
        else {
          this.checkForMatch(type)
        }  
        
  };

  checkForMatch = secondCard => {
 
    const { firstCard,cardList } = this.state;
    if (firstCard === secondCard)
    return;

    this.setState({
      stopTheClicking : true
    })


    let newCardListData = [ ...cardList ];
    let firstCardItem = {...cardList[firstCard]}
    let secondCardItem = {...cardList[secondCard]}

    if (firstCardItem.cardType === secondCardItem.cardType) {
      this.setState({
        hasFlippedCard : false,
        firstCard : '',
        stopTheClicking : false
        })
      /*
        They match don't flip them back
      */
    } else {
      /*
        flip them back
      */

     firstCardItem.flipped = false;
     newCardListData[firstCard] = firstCardItem

     secondCardItem.flipped = false;
     newCardListData[secondCard] = secondCardItem

     console.log(newCardListData);
     
     setTimeout(() => {
      this.setState({
        cardList: newCardListData,
        hasFlippedCard : false,
        firstCard : null,
        stopTheClicking : false
        })
      }, 1000);
    }
  };

  render() {
    const { cardList } = this.state;
    return (
      <section
        className="memory_game"
        style={{
          height: "640px",
          width: "640px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          perspective: "1000px"
        }}
      >
        {cardList.map(card => (
          <MemCard
            key={card.id}
            id={card.id}
            thmb={card.cardType}
            callbackFromParent={this.handleFlip}
            hasFlippedCard={this.state.hasFlippedCard}
            flipped={card.flipped}
            stopTheClicking={this.state.stopTheClicking}
          />
        ))}
      </section>
    );
  }
}

export default MemoryGame;
