export function lastIndexOf(arr, predicate) {
    let i = arr.length - 1;
    while (i >= 0 && !predicate(arr[i])) i--;
    return i;
}

function getCssDeclarations(k, v): string[] {
    if (v instanceof Object) return Object.entries(v)
        .map(([kInner, vInner]) => getCssDeclarations(`${k}-${kInner}`, vInner))
        .reduce((prev, current) => [...prev, ...current], []);

    return [`--${k}: ${v}`];
}

export function variablesToCss(vars: object) {
    return Object.entries(vars)
        .map(([k, v]) => getCssDeclarations(k, v))
        .reduce((prev, current) => [...prev, ...current], [])
        .join('; ');
}
