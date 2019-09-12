import React from 'react';
import { addedFeatures, deleteAddedFeatures } from './actions';
import { functionalContext } from '../src/FunctionContext/functionalContext';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

const App = ({ state, addedFeatures, deleteAddedFeatures }) => {
  const removeFeature = feature => {
    console.log('this is the remove feature', feature);
    // dispatch an action here to remove an item
    deleteAddedFeatures(feature);
  };
  const addItem = item => {
    // dipsatch an action here to add an item
    addedFeatures(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} deleteItem={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} addItem={addItem} />
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
  { addedFeatures, deleteAddedFeatures }
)(App);
