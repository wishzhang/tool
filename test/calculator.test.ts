import {
  getAverage
} from '../src/index';

test('getAverage', () => {
  expect(getAverage(1,2,3)).toEqual(2);
  expect(getAverage(1,2)).toEqual(1.5);
});
