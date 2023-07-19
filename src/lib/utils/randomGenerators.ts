function boxMullerTransform() {
    const u1 = Math.random();
    const u2 = Math.random();

    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);

    return { z0, z1 };
}

export function randomNormal(mean = 0.5, stddev = 0.1) {
    const { z0 } = boxMullerTransform();

    return z0 * stddev + mean;
}

/**
 * Generates an array of random elements with the specified properties.
 * @param n_elements The number of elements to generate.
 * @param properties An array of tuples, where each tuple contains the minimum and maximum values for a property, and an optional different random function (preferably with value between 0 and 1).
 * @returns An array of randomly generated elements, where each element is an array of property values.
 */
export const generate = (n_elements: number, properties: Array<[number, number, (() => number)?]>) => {
    const elems = [];
    for (let i = 0; i < n_elements; i++) {
        const p = [];
        for (const prop of properties) {
            p.push((prop?.[2]?.() ?? Math.random()) * (prop[1] - prop[0]) + prop[0]);
        }
        elems.push(p);
    }
    return elems;
};