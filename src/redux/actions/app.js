export const SHOW_MODAL = 'SHOW_MODAL'
export const DISMISS_MODAL = 'DISMISS_MODAL'

export const showModal = (modalMode, modalData) => ({ type: SHOW_MODAL, modalMode, modalData })

export const dismissModal = () => ({ type: DISMISS_MODAL })