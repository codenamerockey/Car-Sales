import React from 'react';
import { addedFeatures, deleteAddedFeatures, updatedTotal } from './actions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = ({ state }, props) => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };
  const buyItem = () => {
    // dipsatch an action here to add an item
    // e.preventDefault();
    // console.log(item);
    // props.AddedFeatures();
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addFeature={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { addedFeatures, deleteAddedFeatures, updatedTotal }
)(App);
