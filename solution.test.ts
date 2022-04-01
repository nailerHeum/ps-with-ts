
// https://programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos: number[], win_nums: number[]): number[] {
  let matchedCount = 0;
  let zeroCount = 0;
  lottos.forEach(num => {
    if (win_nums.some(n => n === num)) matchedCount++;
    if (num === 0) zeroCount++;
  });
  const max = 7 - zeroCount - matchedCount;
  const min = 7 - matchedCount;
  return [max === 7 ? 6 : max, min === 7 ? 6 : min]; 
}

test('testcase1', () => {
  expect(
    solution([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19])
    ).toEqual([3, 5]);
});

test('testcase2', () => {
  expect(
    solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
  ).toEqual([1, 6])
});