import { api_configuration } from "./config";

export function GetJournalSummary() {
    console.log("Updating journal summary")
    return fetch(api_configuration.api_root + '/journal')
        .then(response => response.json())
        .then(data => {return data});
}
