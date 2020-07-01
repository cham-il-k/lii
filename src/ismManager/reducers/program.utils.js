export const addTabletToProgram = (program, tabletToAdd) => {
  const existingTablet = program.find(
    tablet => tablet.id === tabletToAdd.id
  );

  
  return [...program,  ...tabletToAdd];
};

export const removeTabletFromProgram = (program, tabletToRemove) => {
  const existingTablet = program.find(
    tablet => tablet.id === tabletToRemove.id
  );

  if (existingTablet) {
    return program.filter(tablet => tablet.id !== tabletToRemove.id);
  }
/* 
  return program.map(tablet =>
    tablet.id === tabletToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  ); */
};
