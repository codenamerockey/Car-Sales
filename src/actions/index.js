//- ALL the action things
// actions - objects that describe to a reducer how state should change based on some event
// action creators - a function that "creates" and action by return action objects out of it
// action types - capture action type strings in a variable to save us from misspellings

//ADD Feature Action Creator

//action type variable
export const ADDED_FEATURES = 'ADDED_FEATURES';

//action creator function
export const addedFeatures = feature => {
  console.log('This is from the add features action', feature);
  // action object
  return { type: ADDED_FEATURES, payload: feature };
};

// Delete Feature Action Creator
//action type variable
export const DELETE_ADDED_FEATURES = 'DELETE_ADDED_FEATURES';

//action creator function
export const deleteAddedFeatures = deletedFeature => {
  //action object
  return { type: DELETE_ADDED_FEATURES, payload: deletedFeature };
};
