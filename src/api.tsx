import { api_configuration } from "./config";
import { Summary } from "./summary";

export function GetJournalSummary() {
    console.log("Updating journal summary")
    return fetch(api_configuration.api_root + '/journal')
        .then(response => response.json())
        .then(data => data as Summary);
}
