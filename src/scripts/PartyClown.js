import { BookingForm } from "./BookingForm.js"
import { Requests } from "./Requests.js"

export const PartyClown = () => {
   return `
   <h1>Buttons and Lollipop the Party Clowns</h1>
   <section class="bookingForm">
      ${BookingForm()}
   </section>
   
   <section class="serviceRequests">
      <h2>Booking Requests</h2>
      ${Requests()}
   </section>
   `
}