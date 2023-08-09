const extractCapitalLetters = (str) => {
    return str.replace(/[^A-Z]+/g, "");
}

export {
    extractCapitalLetters
}