export function getRandomChar(charset) {
    return charset[getRandomInt(charset.length)];
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function replaceAt(src, char, index) {
    return src.substr(0, index) + char + src.substr(index + 1);
}
