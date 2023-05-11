import convert from '../src/js/convert';

const units = ["℃", "℉", "K"];

let testsCount = 0;
let failedCount = 0;

[
    //℃, ℉,  K
    [0, 32, 273.15],
    [37, 98.6, 310.15]
].forEach((test) => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const req = { from: units[i], to: units[j], val: test[i] };
            const res = convert(req);
            const passed = res === test[j];
            testsCount++;
            if (!passed) failedCount++;
            console.assert(passed, `request: ${JSON.stringify(req)}\nexpected: ${test[j]}\tactual: ${res}`);
        }
    }
});

console.info(` ${testsCount} Tests Passed!!`);
console.warn(` ${failedCount} Tests Failed!!`);
