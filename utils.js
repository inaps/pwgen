export function getRandomChar(charset) {
    return charset[getRandomInt(charset.length)];
}

function reduceTo(value, max) {
    function reduce(value) {
        if (value > max) {
            return reduce(value * Math.random())
        }

        return value;
    }

    return reduce(value)
}

export function getCryptoRandom() {
    return window.crypto.getRandomValues(new Uint8Array(1))[0];
}

export function getRandomInt(max) {
    const randomInt = getCryptoRandom(max)
    const randomIntReduced = reduceTo(randomInt, max)

    return Math.floor(randomIntReduced);
}

export function replaceAt(src, char, index) {
    return src.substr(0, index) + char + src.substr(index + 1);
}
