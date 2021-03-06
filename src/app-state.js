/**
 * Change app state. Given a previous app state and an action, containing
 * a complete description of what changed, apply the change and 
 * return the new state.
 * 
 * TODO: Finish converting app to use Redux.
 * 
 * @param {*} state Previous app state
 * @param {*} action Details of what changed
 */
export function changeState(state, action){
  switch (action.type) {
    case CHANGE_PROJECT: {
      return Object.assign({}, state, {
        activeProject: action.project
      });
    }
    case CHANGE_CATEGORY: {
      return Object.assign({}, state, {
        activeCategory: action.category
      });
    }
    case UPDATE_CATEGORY_VISIBILITY: {
      var expanded = Object.assign({}, state.expandedCategories, {[action.category]: action.visible}
      );
      return Object.assign({}, state, {
        expandedCategories: expanded
      });
    }
    case UPDATE_CONTENT_VISIBILITY: {
      var expanded = Object.assign({}, state.expandedContent, {[action.id]: action.visible});
      return Object.assign({}, state, {
        expandedContent: expanded
      });
    }
    case UPDATE_EMBED_READY: {
      return Object.assign({}, state, {
        embedReady: action.ready
      });
    }
    case UPDATE_ERROR_STATE: {
      return Object.assign({}, state, {
        errorState: action.detail
      });
    }
    default: return state;
  }
}

/* Set up action types and action creators. */

export const CHANGE_PROJECT = 'CHANGE_PROJECT';
export function changeProject(project) {
  return {
    type: CHANGE_PROJECT,
    project
  };
}

export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    category
  };
}

export const UPDATE_CATEGORY_VISIBILITY = 'UPDATE_CATEGORY_VISIBILITY';
export function updateCategoryVisibility(category, visible) {
  return {
    type: UPDATE_CATEGORY_VISIBILITY,
    category,
    visible
  };
}

export const UPDATE_CONTENT_VISIBILITY = 'UPDATE_CONTENT_VISIBILITY';
export function updateContentVisibility(id, visible) {
  return {
    type: UPDATE_CONTENT_VISIBILITY,
    id,
    visible
  };
}


export const UPDATE_EMBED_READY = 'UPDATE_EMBED_READY';
export function updateEmbedReady(ready) {
  return {
    type: UPDATE_EMBED_READY,
    ready
  };
}

export const UPDATE_ERROR_STATE = 'UPDATE_ERROR_STATE';
export function updateErrorState(detail) {
  return {
    type: UPDATE_ERROR_STATE,
    detail
  };
}
