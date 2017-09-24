import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    //console.log('ACTION Received', action);
    console.log('STATE at STORE ', state);


    switch (action.type) {
        case FETCH_WEATHER:

            //return state.concat([ action.payload.data ]); This is what happens when we use the below syntax.
            return [ action.payload.data, ...state ];
    }

    return state;
}