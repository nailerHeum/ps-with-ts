"use strict";
exports.__esModule = true;
var assert = require("assert");
function solution(jobs) {
    jobs = jobs.sort(function (a, b) { return a[0] > b[0] ? -1 : 1; });
    var answer = 0;
    return answer;
}
assert(solution([[0, 3], [1, 9], [2, 6]]) === 9);
//# sourceMappingURL=solution.js.map