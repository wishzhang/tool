/**
 * simple date format
 * @param date
 * @param format
 */
export function dateFormat(date: Date | string | number, format: string): string {
  date = new Date(date);
  format = format || 'yyyy-MM-dd hh:mm:ss';
  if (date.toString() !== 'Invalid Date') {
    let o: any = {
      "M+": date.getMonth() + 1, //month
      "d+": date.getDate(), //day
      "h+": date.getHours(), //hour
      "m+": date.getMinutes(), //minute
      "s+": date.getSeconds(), //second
      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
      "S": date.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(format))
        format = format.replace(RegExp.$1,
          RegExp.$1.length === 1 ? o[k] :
            ("00" + o[k]).substr(("" + o[k]).length));
    return format;
  }
  return '';
}

/**
 * calculate the distance of two date value.
 * @param startValue
 * @param endValue
 */
export function dateDistance(startValue: number, endValue: number): object {
  let dValue = endValue - startValue;

  let days = Math.floor(dValue / (24 * 3600 * 1000))

  let rest1 = dValue % (24 * 3600 * 1000)
  let hours = Math.floor(rest1 / (3600 * 1000))

  let rest2 = rest1 % (3600 * 1000)
  let minutes = Math.floor(rest2 / (60 * 1000))

  let rest3 = rest2 % (60 * 1000)
  let seconds = Math.round(rest3 / 1000)
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}
