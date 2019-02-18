import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as productsOperations from './modules/Products/productsOperations';
import { AppContainer } from './style/AppStyle/AppStyle';
import Header from './components/Header/Header';
import Shop from './views/Shop';
import Loadding from './components/Shop/Loadding';

class App extends Component {
  componentDidMount() {
    const { fetchGetProducts } = this.props;

    fetchGetProducts();
  }

  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return <Loadding />
    }

    return (
      <AppContainer className="App">
        <Header />
        <Shop />
      </AppContainer>
    );
  }
}

const mapStateToProps = state => state.productsReducer;

export default withRouter(connect(mapStateToProps, {
  fetchGetProducts: productsOperations.fetchGetProducts,
})(App));
