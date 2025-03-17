export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload } = action
    
    switch (actionType) {
        case 'ADD_TO_CART': {            
            const { id } = actionPayload
            const productIndex = state.findIndex(item => item.id === id)  

            if (productIndex === -1) {
                const newState = [
                    ...state,
                    {
                        ...actionPayload,
                        qty: 1
                    }
                ]
                
                updateLocalStorage(newState)
                return newState
            } else {         
                const newState = structuredClone(state)
                newState[productIndex].qty += 1
                updateLocalStorage(newState)
                return(newState)
            }
        }

        case 'REMOVE_FROM_CART': {
            const { id } = actionPayload
            
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            
            return newState
        }

        case 'CLEAR_CART': {
            updateLocalStorage([])
            return []
        }
    }

    return state
}