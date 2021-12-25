import {heepSort, MinHeap, MaxHeap} from '../src/index';

test('heepSort', () => {
  let res = heepSort([4, 1, 3, 2, 16, 9, 10, 14, 8, 7]);
  expect(res).toEqual([1, 2, 3, 4, 7, 8, 9, 10, 14, 16]);
});

test('MinHeap', () => {
  let arr = [4, 1, 3, 2];
  let queue = new MaxHeap(arr);

  expect(queue.getMax()).toBe(4);
  expect(queue.insert(5)).toBe(true);
  expect(queue.insert(6)).toBe(true);
  expect(queue.getMax()).toBe(6);

  queue.removeMax()
  queue.removeMax()
  queue.removeMax()
  queue.removeMax()
  queue.removeMax()
  queue.removeMax()

  expect(queue.isEmpty()).toBe(true);
})

test('MaxHeap', () => {
  let arr = [4, 1, 3, 2];
  let queue = new MinHeap(arr);

  expect(queue.getMin()).toBe(1);
  expect(queue.insert(0)).toBe(true);
  expect(queue.insert(-1)).toBe(true);
  expect(queue.getMin()).toBe(-1);

  queue.removeMin()
  queue.removeMin()
  queue.removeMin()
  queue.removeMin()
  queue.removeMin()
  queue.removeMin()

  expect(queue.isEmpty()).toBe(true);
})

