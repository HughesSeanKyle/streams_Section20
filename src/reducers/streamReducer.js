import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM, 
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return { ...state, [action.payoad.id]: action.payoad }
        case CREATE_STREAM:
            return { ...state, [action.payoad.id]: action.payoad }
        case EDIT_STREAM:
            return { ...state, [action.payoad.id]: action.payoad }
        default:
            return state;
    }
};




/*
// 1.1
ES2015 Object tricks
const animalSounds = { cat: 'meow', dog: 'bark' };

const animal = 'lion';

const sound = 'roar';

// Add above two variables to the animalsounds object without mutuatiing original object. 
{ ...animalSounds, [animal]: sounds }

The square braces on the animal key is called key interpolation. (NB! An array is note being created.)
*/