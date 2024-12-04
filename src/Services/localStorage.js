const RETRIES_KEY = 'retries';

export function getRetries() {
    const retriesDataString = localStorage.getItem(RETRIES_KEY) || 3;
    const retries = JSON.parse(retriesDataString);
    return retries;
}

export function setRetries(retries) {
    const updatedRetriesString = JSON.stringify(retries);
    localStorage.setItem(RETRIES_KEY, updatedRetriesString);
}