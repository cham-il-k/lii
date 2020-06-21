import { createSelector } from 'reselect';

const selectWords = state => state.words;
const selectSoura = state => state.soura

export const selectWordsSelected = createSelector(
    [selectWords],
    words => words.words
)/* 
export const selectCaneva = createSelector(
  [selectSoura],
  soura =>  Object.keys(soura).map(key => [key])
  )

export const selectProducts = collectionParam => createSelector(
  [selectCollections],
  (collections) =>  {
    collections.filter(coll => 
      coll[0] === collectionParam
    )
  }
); */
