import { ADDED_FEATURES } from '../actions';
import { DELETE_ADDED_FEATURES } from '../actions';

const initialValue = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

export function reducer(state = initialValue, action) {
  console.log('made it to the reducer', action);
  console.log('This is the payload', action.payload);
  switch (action.type) {
    case ADDED_FEATURES:
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price + action.payload.price,
          features: [...state.car.features, action.payload]
        },

        store: state.store.filter(
          ({ id }) =>
            ![
              ...state.car.features.map(({ id }) => id),
              action.payload.id
            ].includes(id)
        )
      };

    case DELETE_ADDED_FEATURES:
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price - action.payload.price,
          features: state.car.features.filter(
            feature =>
              ![
                ...state.store.map(feature => feature.id),
                action.payload.id
              ].includes(feature.id)
          )
        },

        store: [...state.store, action.payload]
      };
    default:
      return state;
  }
}
