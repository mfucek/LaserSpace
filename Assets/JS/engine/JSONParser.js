const readJson = (file) => {
    const request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send();
    if (request.readyState === 4 && request.status === 200) {
        return JSON.parse(request.response);
    }
};