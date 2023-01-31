import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(monsters);

    return (
      <>
        {monsters.map((m, idx) => {
          return <h1 key={idx}>{m.name}</h1>;
        })}
      </>
    );
  }
}

export default CardList;
