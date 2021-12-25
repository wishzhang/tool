import {Timer} from "../src";
import {dateDistance} from "../src";

test('timer', (done) => {
  let timer = new Timer({
    onProgress(duration: number) {
      let obj:any = dateDistance(0, duration);
      if (obj.seconds === 3) {
        done();
      }
    }
  });
  timer.start();
  timer.pause();
  timer.reset();
  timer.start();
});
