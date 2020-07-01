import { createSelector } from 'reselect';

const selectWords = state => state.words.words;
const selectSoura = state => state.soura.soura

export const selectWordsSelected = createSelector(
    [selectWords],
    words => words
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
