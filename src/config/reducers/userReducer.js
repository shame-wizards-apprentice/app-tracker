const initialState = {
    username: "",
    password: "",
    isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_ACTION':
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default userReducer