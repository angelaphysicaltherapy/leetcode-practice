const equalIsNot = (s) => {
    if (typeof s === 'string' || s instanceof String) {
        return s.split("is").length === s.split("not").length;
    }
    else throw new Error('Not a valid string.')
}
//assuming we want empty string to return true