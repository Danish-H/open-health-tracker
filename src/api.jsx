export function GetJournalSummary() {
    return fetch('http://localhost:5085/journal')
        .then(response => response.json())
        .then(data => {return data});
}