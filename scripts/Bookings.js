import { getBookings, getVenues, getBands } from "./database.js";

const bookings = getBookings()
const venues = getVenues()
const bands = getBands()

//this function finds the band for a booking
const findBand = (bandId, allBands) => {
    let bookedBand = null
    for (const band of bands) {
        if(band.id === bandId){
            bookedBand = band
        }        
    }
    return bookedBand
}
//this function finds the band for a booking
const findVenue = (venueId, allVenues) => {
    let bookedVenue = null
    for (const venue of venues) {
        if(venue.id === venueId){
            bookedVenue = venue
        }        
    }
    return bookedVenue
}


//html for bookings
export const BookingList = () => {
    let bookingsHTML = "<ul>"
    for (const booking of bookings) {
        //debugger
        const thisBand = findBand(booking.bandId, bands)
        const thisVenue = findVenue(booking.venueId, venues)
                
        bookingsHTML += `<li>${thisBand.name} is playing at the 
                        ${thisVenue.name} on ${booking.bookingDate}</li>`
    }
    return bookingsHTML
}