import { createSelector } from 'reselect';

const selectSelection = state => state.selection;


export const selectSelectedSelection = createSelector(
    [selectSelection],
    selection => selection.selection
)
export const selectCollections = createSelector(
  [selectSelectedSelection],
  selection =>  Object.keys(selection).map(key => selection[key])
  )

export const selectProducts = collectionParam => createSelector(
  [selectCollections],
  (collections) =>  {
    collections.filter(coll => 
      coll[0] === collectionParam
    )
  }
);
