export function GetJournalSummary() {
    console.log("Updating journal summary")
    return fetch('http://localhost:5085/journal')
        .then(response => response.json())
        .then(data => {return data});
}