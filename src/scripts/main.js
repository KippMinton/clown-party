import { PartyClown } from "./PartyClown.js"
import { fetchRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
   fetchRequests().then(
      () => {
   mainContainer.innerHTML = PartyClown()
      }
   )
}


render()

mainContainer.addEventListener(
   "stateChanged",
   customEvent => {
      render()
   }
)