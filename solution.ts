import * as assert from 'assert';

function solution(jobs: number[][]): number {
  jobs = jobs.sort((a, b) => a[0] > b[0] ? -1 : 1);
  const answer: number = 0;

  return answer;
}
assert(solution([[0, 3], [1, 9], [2, 6]]) === 9);