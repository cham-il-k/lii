import { createSelector } from 'reselect';

const selectProfil = state => state.profil;

export const selectCurrentProfil = createSelector(
  [selectProfil],
  profil => profil.currentProfil
);

export const selecttProfilCollection = profilId => createSelector(
  [selectProfil],
  profil => profil.collection
)
