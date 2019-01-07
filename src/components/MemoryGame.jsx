import React, { Component } from "react";
import MemCard from "./MemCard";

class MemoryGame extends Component {
  state = {
    cardList: [
      { id: 1, cardType: "react", flipped: false },
      { id: 2, cardType: "react", flipped: false },
      { id: 3, cardType: "angular", flipped: false },
      { id: 4, cardType: "angular", flipped: false },
      { id: 5, cardType: "aurelia", flipped: false },
      { id: 6, cardType: "aurelia", flipped: false },
      { id: 7, cardType: "backbone", flipped: false },
      { id: 8, cardType: "backbone", flipped: false },
      { id: 9, cardType: "vue", flipped: false },
      { id: 10, cardType: "vue", flipped: false },
      { id: 11, cardType: "ember", flipped: false },
      { id: 12, cardType: "ember", flipped: false }
    ],
    hasFlippedCard: false,
    firstcard: "",
    secondcard: ""
  };

  handleFlip = type => {
       const { cardList } = this.state;
       // 1. Make a shallow copy of the items
       let newCardListData = [ ...cardList ];
       console.log(newCardListData)


        // 2. Make a shallow copy of the item you want to mutate
        let item = {...cardList[type]};
        // 3. Replace the property you're intested in
        item.flipped = true
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        newCardListData[type] = item 
       // 5. Set the state to our new copy
       //this.setState({cardList:newCardListData});
 /*    if (!this.state.hasFlippedCard) {
      this.setState({
        hasFlippedCard: true,
        firstcard: type
      });
      return;
    }
    let secondcard = type;
    this.checkForMatch(secondcard); */
  };

  checkForMatch = secondcard => {
    const { firstcard } = this.state;

    if (firstcard.props.thmb === secondcard.props.thmb) {
      console.log("matches");
    } else {
      console.log("!matches");
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
            thmb={card.cardType}
            callbackFromParent={this.handleFlip}
            hasFlippedCard={this.state.hasFlippedCard}
            flipped={card.flipped}
          />
        ))}
      </section>
    );
  }
}

export default MemoryGame;
