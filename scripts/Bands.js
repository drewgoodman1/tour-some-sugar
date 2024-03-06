import { getBands } from "./database.js";

const bands = getBands()

//html for bands
export const BandList = () => {
    let bandsHTML = "<ul>"
    for (const band of bands) {
        //debugger
        bandsHTML += `<ul class="eachband"
                          data-type="band"
                          data-id="${band.id}"
                          data-name="${band.name}"
                       >${band.name}</li>
                       <li>${band.members}</li>
                       <li>${band.genre}</li>
                       <li>${band.established}</ul><br>`
    }
    return bandsHTML
}