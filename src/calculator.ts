/**
 * get average from several nums
 * @param nums
 */
export function getAverage(...nums: number[]) {
  if (!nums.length) return 0;
  let total = nums.reduce((sum, num) => {
    return sum + num;
  }, 0);
  let average = total / nums.length;
  return average;
}
