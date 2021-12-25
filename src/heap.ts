/**
 * The Heap is an array that can be regard as a similar FBT.
 * It comes in two forms: The MaxHeap and The MinHeap.
 * For Example, The MaxHeap's charater means
 * that every node must less than their parent node: A[PARENT(i)] ≥  A[i].
 *
 */

function parent(i: number) {
  return Math.floor((i - 1) / 2);
}

function left(i: number) {
  return (i << 1) + 1;
}

function right(i: number) {
  return (i << 1) + 2;
}

function exchange(arr: number[], i: number, j: number) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

export function heepSort(arr: number[]) {
  let res = [];
  let minHeap: MinHeap = new MinHeap(arr);
  while (!minHeap.isEmpty()) {
    res.push(minHeap.removeMin());
  }
  return res;
}

/**
 * The max heap
 */
export class MaxHeap {
  private heap: number[];

  constructor(heap: number[] = []) {
    this.heap = JSON.parse(JSON.stringify(heap));
    let lastNotLeaf = Math.floor(this.heap.length / 2);
    for (let i = lastNotLeaf; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  insert(x: number): boolean {
    try {
      this.heap.unshift(x);
      this.shiftDown(0);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  getMax() {
    return this.heap[0];
  }

  removeMax() {
    const max = this.heap[0];
    exchange(this.heap, 0, this.heap.length - 1);
    this.heap.length--;
    this.shiftDown(0);
    return max;
  }

  isEmpty(): boolean {
    return this.size() <= 0;
  }

  size(): number {
    return this.heap.length
  }

  private shiftDown(i: number) {
    let l = left(i);
    let r = right(i);
    let largest;
    if (l < this.heap.length && this.heap[l] > this.heap[i]) {
      largest = l;
    } else {
      largest = i;
    }
    if (r < this.heap.length && this.heap[r] > this.heap[largest]) {
      largest = r;
    }
    if (largest !== i) {
      exchange(this.heap, largest, i);
      this.shiftDown(largest);
    }
  }
}

/**
 * The min heap
 */
export class MinHeap {
  private heap: number[];

  constructor(heap: number[] = []) {
    this.heap = JSON.parse(JSON.stringify(heap));
    let lastNotLeaf = Math.floor((this.heap.length - 1) / 2);
    for (let i = lastNotLeaf; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  insert(x: number): boolean {
    try {
      this.heap.push(x);
      this.shiftUp(this.heap.length - 1);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  getMin() {
    return this.heap[0];
  }

  removeMin() {
    const min = this.heap[0];
    exchange(this.heap, 0, this.heap.length - 1);
    this.heap.length--;
    this.shiftDown(0);
    return min;
  }

  isEmpty(): boolean {
    return this.heap.length <= 0;
  }

  size(): number {
    return this.heap.length;
  }

  private shiftDown(i: number) {
    let l = left(i);
    let r = right(i);
    let least;
    if (l < this.heap.length && this.heap[i] > this.heap[l]) {
      least = l;
    } else {
      least = i;
    }

    if (r < this.heap.length && this.heap[least] > this.heap[r]) {
      least = r;
    }

    if (least !== i) {
      exchange(this.heap, least, i);
      this.shiftDown(least);
    }
  }

  private shiftUp(i: number) {
    let p = parent(i);
    while (p >= 0) {
      if (this.heap[i] < this.heap[p]) {
        exchange(this.heap, i, p);
        i = p;
        p = parent(p);
      } else {
        break;
      }
    }
  }
}
