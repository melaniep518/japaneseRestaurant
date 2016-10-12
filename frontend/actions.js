// Saving our action.type string as variables helps with error checking because when we use this variable in our case
// statement if we misspell it it will throw an error, if our case is a string the switch statement will not throw an error
// but it will not work as expected
export const ADD_FOOD = "ADD_FOOD";
export const CLEAR = "CLEAR";

export const clearFood = () => ({
  type: CLEAR
});
