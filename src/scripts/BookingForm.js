import { sendRequest } from "./dataAccess.js"

export const BookingForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Parent Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyDate">Party Date</label>
        <input type="date" name="partyDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="attendeesAmount">Number of Party Guests</label>
            <input type="number" name="attendeesAmount" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyHours">Total Party Hours</label>
            <input type="number" name="partyHours" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userName = document.querySelector("input[name='parentName']").value
        const userChild = document.querySelector("input[name='childName']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userAttendees = document.querySelector("input[name='attendeesAmount']").value
        const userDate = document.querySelector("input[name='partyDate']").value
        const userTime = document.querySelector("input[name='partyHours']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parent: userName,
            child: userChild,
            address: userAddress,
            attendees: userAttendees,
            partyDate: userDate,
            partyHours: userTime
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})