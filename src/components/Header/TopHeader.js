import React, { PureComponent } from "react";
import { array, shape, func } from "prop-types";
import {
  HeaderLink,
  TopHeader,
  TextField
} from "../../style/HeaderStyle/HeaderStyle";
import history from "../../modules/history";

class Header extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   let needRender = false;
  //   for (let key in nextProps) {
  //     if (nextProps[key] !== this.props[key]) {
  //       needRender = true;
  //     }
  //   }
  // }

  constructor(props) {
    super(props);

    this.getWords = this.getWords.bind(this);
  }

  getWords(evt) {
    evt.preventDefault();
    const { getWord } = this.props;

    if (evt.target.search.value) {
      history.push("/search");
      getWord(evt.target.search.value);
    }
  }

  render() {
    const {
      cartReducer: { productsId }
    } = this.props;
    console.log("render header", this.props);
    return (
      <TopHeader>
        <li>
          <HeaderLink to="/">Shop</HeaderLink>
        </li>
        <li>
          <form action="" onSubmit={this.getWords}>
            <TextField name="search" type="text" placeholder="Search" />
          </form>
        </li>
        <li>
          <HeaderLink to={`/cart`}>Cart({productsId.length})</HeaderLink>
        </li>
      </TopHeader>
    );
  }
}

Header.propTypes = {
  getWord: func.isRequired,
  cartReducer: shape({
    productsId: array.isRequired
  })
};

export default Header;
