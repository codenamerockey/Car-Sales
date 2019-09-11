//- ALL the action things
// actions - objects that describe to a reducer how state should change based on some event
// action creators - a function that "creates" and action by return action objects out of it
// action types - capture action type strings in a variable to save us from misspellings

//ADD Feature Action Creator

//action type variable
export const ADDED_FEATURES = 'ADDED_FEATURES';

//action creator function
export const addedFeatures = feature => {
  // action object
  return { type: ADDED_FEATURES, feature };
};

// Delete Feature Action Creator
//action type variable
export const DELETE_ADDED_FEATURES = 'DELETE_ADDED_FEATURES';

//action creator function
export const deleteAddedFeatures = deletedFeature => {
  //action object
  return { type: DELETE_ADDED_FEATURES, deletedFeature };
};

// Updat Total Action Creator
//action type variable
export const UPDATED_TOTAL = 'UPDATED_TOTAL';

//action creator function
export const updatedTotal = newTotal => {
  //action object
  return { type: UPDATED_TOTAL, newTotal };
};
