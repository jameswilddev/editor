import "./index.css"

import {
    h as picodomH
} from "picodom"

import state from "./../state"

import create from "./create"

const modalTypes = {
    create
}

function modalView() {
    return <div class="modal-container">{state.modals.map(modal => <div class="modal-wrapper">
        <div class="modal">
            <div class="modal-title">{modalTypes[modal.type].title}</div>
            {modalTypes[modal.type].view(modal)}
            <div class="modal-buttons">{modalTypes[modal.type].buttons.map(button => <button onclick={e => button.onclick(modal.state)}>{button.label}</button>)}</div>
        </div>
    </div>)}</div>
}

let nextModalId = 1

function modalOpen(type, modalState) {
    state.modals.push({
        type: type,
        id: nextModalId,
        state: modalState
    })

    nextModalId++
}

export {
    modalTypes,
    modalView,
    modalOpen
}