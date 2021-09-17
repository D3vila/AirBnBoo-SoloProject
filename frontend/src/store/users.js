const USER_BY_ID = 'user/USER_BY_ID'

const userById = user => ({
    type: USER_BY_ID,
    user
})

export const getOneUser = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}`)
    if (res.ok) {
        const oneUser = await res.json();
        await dispatch(userById(oneUser))
        return res
    }

}

const userReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {

        case USER_BY_ID:
            newState = {
                ...state,
                ...action.user
            }
            return newState
        default:
            return state
    }
}

export default userReducer;
