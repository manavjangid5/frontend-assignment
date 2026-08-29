import { createContext, useContext, useMemo, useReducer } from 'react';
import { packages as seedPackages } from '../data/packages.js';
import { team as seedTeam } from '../data/team.js';

const initialState = {
  editMode: false,
  packages: seedPackages,
  team: seedTeam,
};

const uid = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

function reducer(state, action) {
  switch (action.type) {
    case 'toggleEdit':
      return { ...state, editMode: !state.editMode };

    case 'add':
      return {
        ...state,
        [action.collection]: [
          ...state[action.collection],
          { id: uid(), ...action.item },
        ],
      };

    case 'update':
      return {
        ...state,
        [action.collection]: state[action.collection].map((item) =>
          item.id === action.id ? { ...item, ...action.patch } : item
        ),
      };

    case 'remove':
      return {
        ...state,
        [action.collection]: state[action.collection].filter(
          (item) => item.id !== action.id
        ),
      };

    default:
      return state;
  }
}

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

function useContent() {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error('useContent must be used within <ContentProvider>');
  return ctx;
}

//[editMode, toggleEditMode]
export function useEditMode() {
  const { state, dispatch } = useContent();
  return [state.editMode, () => dispatch({ type: 'toggleEdit' })];
}

/**
 * Access one collection by name.
 * @returns {{ items: object[], add: Function, update: Function, remove: Function }}
 */
export function useCollection(collection) {
  const { state, dispatch } = useContent();
  return {
    items: state[collection],
    add: (item) => dispatch({ type: 'add', collection, item }),
    update: (id, patch) => dispatch({ type: 'update', collection, id, patch }),
    remove: (id) => dispatch({ type: 'remove', collection, id }),
  };
}
