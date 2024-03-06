/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    venues: [{
        id: 1,
        name: "Frog and Peach",
        address: "455 Higuera St. San Luis Obispo CA, 93401",
        sqFt: 956,
        occupancy: 99
    }, {
        id: 2,
        name: "Whisky a Go Go",
        address: "8901 Sunset Blvd, West Hollywood, CA 90069",
        sqFt: 1500,
        occupancy: 300
    }, {
        id: 3,
        name: "The Fillmore",
        address: "1805 Geary Blvd, San Francisco, CA 94115",
        sqFt: 2000,
        occupancy: 1000
    }, {
        id: 4,
        name: "The Troubadour",
        address: "9081 N Santa Monica Blvd, West Hollywood, CA 90069",
        sqFt: 1800,
        occupancy: 500
    }, {
        id: 5,
        name: "Red Rocks Amphitheatre",
        address: "18300 W Alameda Pkwy, Morrison, CO 80465",
        sqFt: 9600,
        occupancy: 9000
    }, {
        id: 6,
        name: "The Warfield",
        address: "982 Market St, San Francisco, CA 94102",
        sqFt: 2100,
        occupancy: 2250
    }, {
        id: 7,
        name: "The Greek Theatre",
        address: "2700 N Vermont Ave, Los Angeles, CA 90027",
        sqFt: 5900,
        occupancy: 5800
    }],

    bands: [
        {
          id: 1,
          name: "Slightly Stoopid",
          members: 7,
          genre: "Reggae",
          established: 1993
        },
        {
          id: 2,
          name: "Red Hot Chili Peppers",
          members: 4,
          genre: "Rock",
          established: 1983
        },
        {
          id: 3,
          name: "The Beatles",
          members: 4,
          genre: "Rock",
          established: 1960
        },
        {
          id: 4,
          name: "Led Zeppelin",
          members: 4,
          genre: "Rock",
          established: 1968
        },
        {
          id: 5,
          name: "Nirvana",
          members: 3,
          genre: "Grunge",
          established: 1987
        },
        {
          id: 6,
          name: "Pink Floyd",
          members: 5,
          genre: "Progressive Rock",
          established: 1965
        },
        {
          id: 7,
          name: "Metallica",
          members: 4,
          genre: "Heavy Metal",
          established: 1981
        },
        {
          id: 8,
          name: "The Rolling Stones",
          members: 4,
          genre: "Rock",
          established: 1962
        },
        {
          id: 9,
          name: "Radiohead",
          members: 5,
          genre: "Alternative Rock",
          established: 1985
        },
        {
          id: 10,
          name: "Foo Fighters",
          members: 6,
          genre: "Rock",
          established: 1994
        }
      ],
      bookings: [
        {
          id: 1,
          bandId: 8,
          venueId: 2,
          bookingDate: "1/22/24"
        },
        {
          id: 2,
          bandId: 3,
          venueId: 3,
          bookingDate: "2/15/24"
        },
        {
          id: 3,
          bandId: 5,
          venueId: 6,
          bookingDate: "3/10/24"
        },
        {
          id: 4,
          bandId: 7,
          venueId: 4,
          bookingDate: "4/5/24"
        },
        {
          id: 5,
          bandId: 2,
          venueId: 5,
          bookingDate: "5/20/24"
        }
      ]      
}

export const getBands = () => {
    return database.bands.map(bands => ({...bands}))
}
export const getVenues = () => {
    return database.venues.map(venues => ({...venues}))
}
export const getBookings = () => {
    return database.bookings.map(bookings => ({...bookings}))
}