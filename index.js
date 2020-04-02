// Add your functions here
function map(src, func)
{
    const output = []

    src.forEach(element => { output.push(func(element))});

    return output
}

function reduce(src, func, start)
{
    let accum = start === undefined && typeof src.slice(-1)[0] === "number" ? accum = 0 
                : start !== undefined ? accum = start : accum = true

    src.forEach(element => { accum = func(element, accum) });
    return accum
}