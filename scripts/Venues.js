import { getVenues } from "./database.js";

const venues = getVenues()

//html for venues
export const VenueList = () => {
    let venuesHTML = "<ul>"
    for (const venue of venues) {
        //debugger
        venuesHTML += `<ul class="eachvenue"><li>${venue.name}</li>
                       <li>${venue.address}</li>
                       <li>${venue.sqFt}</li>
                       <li>${venue.occupancy}</li></ul><br>`
    }
    return venuesHTML
}