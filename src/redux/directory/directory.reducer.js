//utils
import { SECTION_DATA } from '../../utils/directory.data';

const initalState = {
  sections: SECTION_DATA,
};

const directoryReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
