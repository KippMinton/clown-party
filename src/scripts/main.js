import { PartyClown } from "./PartyClown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
   mainContainer.innerHTML = PartyClown()
}

render()