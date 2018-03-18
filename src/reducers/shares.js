const shares = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SHARE':
    console.log("state", state)
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'SET_SHARES':
      console.log("action", action)
      return [
        ...action.shares
      ]
    default:
      return state
  }
}

export default shares
