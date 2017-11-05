export function arrToMap(arr) {
    return arr.reduce((p, c) => {
        p[c.id] = c;
        return p;
    }, {})
}

export function mapToArr(obj) {
    return Object.keys(obj).map(id=>obj[id])
}