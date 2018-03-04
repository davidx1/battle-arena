const calcPath = (array, width, start, end) => {
    if (
        array !== undefined &&
        width !== undefined &&
        start !== undefined &&
        end !== undefined
    ) {
        return breathFirstCalc(array, width, start, end)
    } else {
        return []
    }
}

const findNeighbors = (array, width, node) => {
    let result = []

    if (node % width < width - 1 && array[node + 1].terrain !== "blocked") {
        result.push(node + 1)
    }

    if (node % width > 0 && array[node - 1].terrain !== "blocked") {
        result.push(node - 1)
    }

    if (node / width < width - 1 && array[node + width].terrain !== "blocked") {
        result.push(node + width)
    }

    if (node / width >= 1 && array[node - width].terrain !== "blocked") {
        result.push(node - width)
    }
    return result
}

const breathFirstCalc = (array, width, start, end) => {
    let queue = [];
    let parents = [];
    let found = false;

    queue.push(start);
    parents[start] = -1;

    while (queue.length > 0 && !found) {
        const node = queue.shift();
        const neighbors = findNeighbors(array, width, node);
        neighbors.forEach(neighbor => {
            if (parents[neighbor] === undefined) {
                parents[neighbor] = node;
                if (neighbor === end) {
                    found = true;
                } else {
                    queue.push(neighbor);
                }
            }
        })
    }

    let path = findPath(parents, end);

    return path;

}

const findPath = (parentsArray, end) => {
    let path = [];
    let node = end;
    while (parentsArray[node] !== -1 && parentsArray[node] !== undefined) {
        path.push(node);
        node = parentsArray[node];
    }
    return path;
}


export default calcPath
