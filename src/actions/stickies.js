export const addSticky = (sticky) => {
  return { type: 'ADD_STICKY', sticky }
}

export const toggleSticky = (id) => {
  return { type: 'TOGGLE_STICKY', id }
}