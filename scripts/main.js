import { BookingList } from "./Bookings.js";
import { VenueList } from "./Venues.js";
import { BandList } from "./Bands.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `<h1>Tour Some Sugar</h1>
                         <div id="bookings">
                         <div id="current_bookings">
                            <h2>Current Bookings</h2>
                            ${BookingList()}
                        </div>
                         </div>
                         <div id="details">
                            <div id="venues">
                                <h2>Venues</h2>
                                ${VenueList()}
                            </div>
                            <div id="bands">
                                <h2>Bands</h2>
                                ${BandList()}
                            </div>
                         </div>
`

mainContainer.innerHTML = applicationHTML