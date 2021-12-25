import {
  isEmail,
  isMobile,
  isURL,
  isLowerCase,
  isUpperCase,
  isAlphabet,
} from '../src/index';

test('isEmail', () => {
  expect(isEmail('1535703141@qq.com')).toEqual(true);
  expect(isEmail('1535703141qq.com')).toEqual(false);
});

test('isMobile', () => {
  expect(isMobile('15216904030')).toEqual(true);
  expect(isMobile('12345678')).toEqual(false);
});

test('isURL', () => {
  expect(isURL('http://www.baidu.com')).toEqual(true);
  expect(isURL('www.baidu.com')).toEqual(false);
});

test('isLowerCase', () => {
  expect(isLowerCase('abc')).toEqual(true);
  expect(isLowerCase('abC')).toEqual(false);
});

test('isUpperCase', () => {
  expect(isUpperCase('ABC')).toEqual(true);
  expect(isUpperCase('ABc')).toEqual(false);
});

test('isAlphabet', () => {
  expect(isAlphabet('ABCabc')).toEqual(true);
  expect(isAlphabet('ABcabc1')).toEqual(false);
});


