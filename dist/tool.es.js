/*!
 * tool.js v1.1.1
 * (c) 2021-2021 wishzhang
 * Released under the MIT License.
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * The Heap is an array that can be regard as a similar FBT.
 * It comes in two forms: The MaxHeap and The MinHeap.
 * For Example, The MaxHeap's charater means
 * that every node must less than their parent node: A[PARENT(i)] ≥  A[i].
 *
 */
function parent(i) {
  return Math.floor((i - 1) / 2);
}

function left(i) {
  return (i << 1) + 1;
}

function right(i) {
  return (i << 1) + 2;
}

function exchange(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function heepSort(arr) {
  var res = [];
  var minHeap = new MinHeap(arr);

  while (!minHeap.isEmpty()) {
    res.push(minHeap.removeMin());
  }

  return res;
}
/**
 * The max heap
 */

var MaxHeap = /*#__PURE__*/function () {
  function MaxHeap() {
    var heap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, MaxHeap);

    this.heap = JSON.parse(JSON.stringify(heap));
    var lastNotLeaf = Math.floor(this.heap.length / 2);

    for (var i = lastNotLeaf; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  _createClass(MaxHeap, [{
    key: "insert",
    value: function insert(x) {
      try {
        this.heap.unshift(x);
        this.shiftDown(0);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this.heap[0];
    }
  }, {
    key: "removeMax",
    value: function removeMax() {
      var max = this.heap[0];
      exchange(this.heap, 0, this.heap.length - 1);
      this.heap.length--;
      this.shiftDown(0);
      return max;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() <= 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.heap.length;
    }
  }, {
    key: "shiftDown",
    value: function shiftDown(i) {
      var l = left(i);
      var r = right(i);
      var largest;

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
  }]);

  return MaxHeap;
}();
/**
 * The min heap
 */

var MinHeap = /*#__PURE__*/function () {
  function MinHeap() {
    var heap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, MinHeap);

    this.heap = JSON.parse(JSON.stringify(heap));
    var lastNotLeaf = Math.floor((this.heap.length - 1) / 2);

    for (var i = lastNotLeaf; i >= 0; i--) {
      this.shiftDown(i);
    }
  }

  _createClass(MinHeap, [{
    key: "insert",
    value: function insert(x) {
      try {
        this.heap.push(x);
        this.shiftUp(this.heap.length - 1);
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this.heap[0];
    }
  }, {
    key: "removeMin",
    value: function removeMin() {
      var min = this.heap[0];
      exchange(this.heap, 0, this.heap.length - 1);
      this.heap.length--;
      this.shiftDown(0);
      return min;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.heap.length <= 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.heap.length;
    }
  }, {
    key: "shiftDown",
    value: function shiftDown(i) {
      var l = left(i);
      var r = right(i);
      var least;

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
  }, {
    key: "shiftUp",
    value: function shiftUp(i) {
      var p = parent(i);

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
  }]);

  return MinHeap;
}();

/**
 * simple date format
 * @param date
 * @param format
 */
function dateFormat(date, format) {
  date = new Date(date);
  format = format || 'yyyy-MM-dd hh:mm:ss';

  if (date.toString() !== 'Invalid Date') {
    var o = {
      "M+": date.getMonth() + 1,
      //month
      "d+": date.getDate(),
      //day
      "h+": date.getHours(),
      //hour
      "m+": date.getMinutes(),
      //minute
      "s+": date.getSeconds(),
      //second
      "q+": Math.floor((date.getMonth() + 3) / 3),
      //quarter
      "S": date.getMilliseconds() //millisecond

    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

    for (var k in o) {
      if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }

    return format;
  }

  return '';
}
/**
 * calculate the distance of two date value.
 * @param startValue
 * @param endValue
 */

function dateDistance(startValue, endValue) {
  var dValue = endValue - startValue;
  var days = Math.floor(dValue / (24 * 3600 * 1000));
  var rest1 = dValue % (24 * 3600 * 1000);
  var hours = Math.floor(rest1 / (3600 * 1000));
  var rest2 = rest1 % (3600 * 1000);
  var minutes = Math.floor(rest2 / (60 * 1000));
  var rest3 = rest2 % (60 * 1000);
  var seconds = Math.round(rest3 / 1000);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

/**
 * email
 * @param s
 */
function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s);
}
/**
 * cell phone number
 * @param s
 */

function isMobile(s) {
  return /^1[0-9]{10}$/.test(s);
}
/**
 * URL
 * @param s
 */

function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s);
}
/**
 * lowercase
 * @param str
 */

function isLowerCase(str) {
  var reg = /^[a-z]+$/;
  return reg.test(str);
}
/**
 * uppercase
 * @param str
 */

function isUpperCase(str) {
  var reg = /^[A-Z]+$/;
  return reg.test(str);
}
/**
 * alphabet
 * @param str
 */

function isAlphabet(str) {
  var reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/**
 * get average from several nums
 * @param nums
 */
function getAverage() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  if (!nums.length) return 0;
  var total = nums.reduce(function (sum, num) {
    return sum + num;
  }, 0);
  var average = total / nums.length;
  return average;
}

/**
 * To calculate the time has pass by, Just like the timer in the running race.
 */
var Timer = /*#__PURE__*/function () {
  function Timer(opt) {
    _classCallCheck(this, Timer);

    _defineProperty(this, "startPoint", -1);

    _defineProperty(this, "duration", 0);

    _defineProperty(this, "preDuration", 0);

    _defineProperty(this, "isRuning", false);

    this.onProgress = opt.onProgress ? opt.onProgress : new Function();
    this.preDuration = opt.preDuration || 0;
  }
  /**
   * To update by calculating the duration
   */


  _createClass(Timer, [{
    key: "update",
    value: function update() {
      if (this.startPoint === -1) {
        this.startPoint = Date.now();
      }

      var segmentDuration = Date.now() - this.startPoint;
      this.duration = this.preDuration + segmentDuration; // callback

      this.onProgress(this.duration);
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      if (!this.isRuning) {
        this.isRuning = true;
        this.update();
        this.interval = setInterval(function () {
          _this.update();
        }, 1000);
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.isRuning) {
        this.isRuning = false;
        this.update();
        clearInterval(this.interval);
        this.startPoint = -1;
        this.preDuration = this.duration;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.isRuning = false;
      clearInterval(this.interval);
      this.startPoint = -1;
      this.preDuration = 0;
      this.duration = 0;
      this.update();
    }
  }]);

  return Timer;
}();

export { MaxHeap, MinHeap, Timer, dateDistance, dateFormat, getAverage, heepSort, isAlphabet, isEmail, isLowerCase, isMobile, isURL, isUpperCase };
