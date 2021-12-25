import {dateFormat, dateDistance} from '../src/index';

test('dateFormat', () => {
  expect(dateFormat('2021-12-05 09:01:02', 'yyyy-MM-dd')).toEqual('2021-12-05');
  expect(dateFormat(new Date('2021-12-05'), 'yyyy-MM')).toEqual('2021-12');
});

test('dateDistance', () => {
  expect(dateDistance(0, 3600*1000)).toEqual({
    days: 0,
    hours: 1,
    minutes: 0,
    seconds: 0,
  });
});

