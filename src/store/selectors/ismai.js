import { createSelector } from 'reselect';

const selectIsmai = state => state.isami;


export const selectIsmaiAsma1 = souraId => createSelector(
    [selectIsmai],
    souras => {
     return   souras[souraId]
    }
)
export const selectIsmaiSoura = soura => createSelector(
  [selectIsmai],
  souras => {
    
    return souras[soura]
})



export const selectIsmaiSouraAya = soura => (min, max)=> createSelector(
  [selectIsmai],
  souras =>  souras[soura]
  )