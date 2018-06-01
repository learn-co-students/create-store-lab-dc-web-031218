export default function manageUsers(state = { users: [] }, action) {
  switch (action.type) {
    case "ADD_USER":
      console.log(action.user);
      console.log("st", state);
      return { users: [...state.users, action.user] };
    default:
      return state;
  }
}
