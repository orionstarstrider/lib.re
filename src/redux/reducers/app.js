import {
    SHOW_MODAL,
    DISMISS_MODAL
} from '../actions/app'

const initialState = {
    modalShown: false,
    modalMode: '',
    modalData: {}
}

const app = (state=initialState, action) => {
    switch(action.type) {
        case SHOW_MODAL: {
            const { modalMode, modalData={} } = action
            return {
                ...state,
                modalShown: true,
                modalMode,
                modalData
            }
        }
        case DISMISS_MODAL: {
            return {
                ...state,
                modalShown: false,
                modalMode: '',
                modalData: {}
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default app