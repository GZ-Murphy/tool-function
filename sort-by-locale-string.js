export function sortByLocaleString() {
    return (collection, property) => {
        if (!collection || !collection.length) return;
        return collection.sort((o, p) => {
            if (typeof o !== "object" || typeof p !== "object") throw ("error");
            // Do really thing for localeCompare
            let a = o[property];
            let b = p[property];
            if (a === b) return 0;
            // If a!== b then check the first charater
            let aStr = a[0].toLowerCase();
            let bStr = b[0].toLowerCase();
            // If first charater is the same
            if (aStr === bStr) {
                if (a === b) {
                    return 0
                // Compare Uppercase to Lowercase
                } else if (b.indexOf(a) === 0) {
                    return -1;
                } else if (a.indexOf(b) === 0) {
                    return 1;
                } else {
                    if (a[0] > b[0]) {
                        return -1
                    } else if (a[0] < b[0]) {
                        return 1;
                    } else {
                        return a.localeCompare(b);
                    }
                }
            // If first charater is not the same
            } else {
                return a.localeCompare(b);
            }
        })
    }
}